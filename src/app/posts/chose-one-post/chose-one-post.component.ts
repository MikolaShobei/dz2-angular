import {Component, Input, OnInit} from '@angular/core';
import {Ipost} from '../../interfaces';

@Component({
  selector: 'app-chose-one-post',
  templateUrl: './chose-one-post.component.html',
  styleUrls: ['./chose-one-post.component.css']
})
export class ChoseOnePostComponent implements OnInit {
  @Input()
  post: Ipost;
  constructor() { }

  ngOnInit(): void {
  }

}
