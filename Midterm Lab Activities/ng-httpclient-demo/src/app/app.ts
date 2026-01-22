import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Fixed casing and import path
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true, // Required for modern Angular imports
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { // Added implements OnInit
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];

  constructor(private httpClient: HttpClient) {} // Fixed casing to HttpClient

  ngOnInit() {
    // Note: 'getUsersRemotely' must be a method you defined in a custom service.
    // If using standard HttpClient, use: this.httpClient.get<User[]>(url).subscribe...
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });
  }
}
