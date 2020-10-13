import { Component, OnInit } from '@angular/core';
import { Listing } from '../interfaces/listing';
import { Data } from '../interfaces/listing';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  listData: Listing
  posts: Data
    constructor(private redditSvc: RedditService) { }

  ngOnInit(): void {
    this.redditSvc.getListing().subscribe(
      (data: Listing) =>
      this.listData = data
    );
    //this.getPost();
  }

/*
  getPost = function() {
    let x = data.data;
    this.posts.children = x.children;
  }
*/
  
}
