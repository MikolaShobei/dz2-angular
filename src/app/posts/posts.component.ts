import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ipost} from '../interfaces';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Ipost[];
  choseOnePost: Ipost;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this
      .httpClient
      .get<Ipost[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(value => this.posts = value);
  }
  getPost(post: Ipost): void{
    this.choseOnePost = post;
  }
}
