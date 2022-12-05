import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  
  matches:any;
  constructor(private json: JsonService) { }

  ngOnInit(): void {
    this.json.getmatches().subscribe(json => this.matches = json)
  }

}
