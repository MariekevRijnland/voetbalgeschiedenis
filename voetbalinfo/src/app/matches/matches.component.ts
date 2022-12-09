import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  
  matches:any;
  PostService: any;
  constructor(private json: PostService) { }

  ngOnInit(): void {
    this.json.getMatchPage().subscribe(json => this.matches = json)
  }

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  fetchPosts(): void {
    this.PostService.getMatchPage().subscribe(
      (response: any) => {
        this.POSTS = response;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
