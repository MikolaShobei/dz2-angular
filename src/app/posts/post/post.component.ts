import {Component, Input, OnInit, Output} from '@angular/core';
import {Ipost} from '../../interfaces';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Ipost;
  @Output()
  BubblePostUp = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getPost(post: Ipost): void {
    this.BubblePostUp.emit(post);
  }

}
