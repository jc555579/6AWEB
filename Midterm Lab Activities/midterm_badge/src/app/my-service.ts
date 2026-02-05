import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, map, tap } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  // Added these to fix TS2339 errors
  category?: string;
  releaseDate?: string | Date;
}

@Injectable({ providedIn: 'root' })
export class MyService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private storageKey = 'portal_posts_cache';
  
  // Added this to fix the "welcomeMessage" error in home.html
  public welcomeMessage: string = "Welcome to the Community Help Desk!";
  
  private postsSource = new BehaviorSubject<Post[]>(this.getStoredPosts());
  posts$ = this.postsSource.asObservable().pipe(delay(800));

  constructor(private http: HttpClient) {
    this.fetchAndStorePosts();
  }

  private getStoredPosts(): Post[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  fetchAndStorePosts(): void {
    this.http.get<Post[]>(this.apiUrl).pipe(
      // We map the data to add dummy categories/dates since the API doesn't provide them
      map(posts => posts.map(post => ({
        ...post,
        category: post.id % 2 === 0 ? 'Engineering' : 'Support',
        releaseDate: new Date().toISOString()
      }))),
      tap(posts => {
        localStorage.setItem(this.storageKey, JSON.stringify(posts));
      })
    ).subscribe({
      next: (posts) => this.postsSource.next(posts),
      error: (err) => console.error('API failed:', err)
    });
  }
}