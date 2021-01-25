import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ipost} from '../interfaces';
import {PostsService} from '../services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Ipost[];
  choseOnePost: Ipost;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getUsers().subscribe(value => this.posts = value);

  }

  getPost(post: Ipost): void {
    this.choseOnePost = post;
  }
}
