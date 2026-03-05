import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  // Make sure HttpClientModule is here so the service works
  imports: [FormsModule, HttpClientModule], 
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  readonly APIUrl = "http://localhost:5038/api/books/";
  books: any[] = [];

  newBookData = {
    title: '',
    description: '',
    price: '',
    author: '',
    publishedYear: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe({
      next: (res: any) => this.books = res,
      error: (err) => console.error("Could not fetch books", err)
    });
  }

  addBook() {
    const formData = new FormData();
    formData.append("title", this.newBookData.title);
    formData.append("description", this.newBookData.description);
    formData.append("price", this.newBookData.price);
    formData.append("author", this.newBookData.author);
    formData.append("publishedYear", this.newBookData.publishedYear);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(() => {
      this.refreshBooks();
      this.resetForm();
    });
  }

  deleteBook(id: string) {
    // Note: Passing ID as a query param to match the backend fix
    this.http.delete(`${this.APIUrl}DeleteBook?id=${id}`).subscribe(() => {
      this.refreshBooks();
    });
  }

  updateBook(id: string) {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", this.newBookData.title);
    formData.append("description", this.newBookData.description);
    formData.append("price", this.newBookData.price);
    formData.append("author", this.newBookData.author);
    formData.append("publishedYear", this.newBookData.publishedYear);

    this.http.put(this.APIUrl + 'UpdateBook', formData).subscribe(() => {
      this.refreshBooks();
      this.resetForm();
    });
  }

  resetForm() {
    this.newBookData = { title: '', description: '', price: '', author: '', publishedYear: '' };
  }
}