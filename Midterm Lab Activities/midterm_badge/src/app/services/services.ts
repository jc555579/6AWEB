import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MyService } from '../my-service';
import { combineLatest, map, startWith, catchError, of, Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services.html', 
  styleUrls: ['./services.css']
})
export class Services {
  private service = inject(MyService);
  searchControl = new FormControl('');
  errorMessage = '';

  // Reactive stream combining data + search input
  filteredPosts$ = combineLatest([
    this.service.posts$,
    this.searchControl.valueChanges.pipe(startWith('')) 
  ]).pipe(
    map(([posts, term]) => {
      const search = term?.toLowerCase() || '';
      return posts.filter(p => 
        p.title.toLowerCase().includes(search) || 
        p.body.toLowerCase().includes(search)
      );
    })
  );
}