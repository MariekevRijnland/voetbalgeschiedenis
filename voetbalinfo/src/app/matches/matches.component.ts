import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { JsonService } from '../json.service';
import { ActivatedRoute } from '@angular/router';
=======
import { PostService } from '../post.service';
>>>>>>> parent of a499e20 (Merge branch 'main' into pagination-Siwani)

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  
  matches:any;
<<<<<<< HEAD
 
  constructor(private json: JsonService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.year = params['year']);
  }
  ngOnInit(): void {
    this.json. getMatchesByYear(this.year).subscribe(json => this.matches = json)
=======
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
>>>>>>> parent of a499e20 (Merge branch 'main' into pagination-Siwani)
  }

}
