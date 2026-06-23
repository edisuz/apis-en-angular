import { Component } from '@angular/core';
import { ListaPostsService } from '../../servicios/lista-posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  constructor(public postService: ListaPostsService) {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.postService.posts = data;
      },
      error: (e) => {
        console.log(e);

      }
    })
  }
}
