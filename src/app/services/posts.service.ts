import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ipost} from '../interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<Ipost[]> {
    return this
      .httpClient
      .get<Ipost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
