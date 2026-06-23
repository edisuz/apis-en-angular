import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaPostsService {
  API_URL = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[];

  constructor(private http: HttpClient) {
    this.posts = []
  }

  getPosts() {
    return this.http.get<any[]>(this.API_URL)
  }
}
