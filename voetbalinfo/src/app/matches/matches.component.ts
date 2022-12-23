import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  
  year:any;
  matches:any;
 
  constructor(private json: JsonService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.year = params['year']);
  }
  ngOnInit(): void {
    this.json. getMatchesByYear(this.year).subscribe(json => this.matches = json)
  }

}
