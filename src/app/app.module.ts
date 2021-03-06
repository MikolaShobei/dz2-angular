import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './posts/post/post.component';
import { ChoseOnePostComponent } from './posts/chose-one-post/chose-one-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    ChoseOnePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
