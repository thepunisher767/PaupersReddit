import { Injectable } from '@angular/core';
import { Listing } from './interfaces/listing';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http:HttpClient) { }

  getListing() {
    return this.http.get<Listing>('https://www.reddit.com/r/aww/.json')
  }
}
