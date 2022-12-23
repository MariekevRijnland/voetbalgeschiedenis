import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.scss']
})
export class SpelersComponent implements OnInit {

  country:any;
  matchID:any;
  spelers:any;

  constructor(private json: JsonService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.matchID = params['matchid']);
    this.route.params.subscribe(params => this.country = params['country']);
  }

  ngOnInit(): void {
      // Haalt alle jaren op die in de json query staan
    this.json.getPlayersByID(this.matchID).subscribe(json => this.spelers = json)
    this.json.getFlag(this.country).subscribe(json => this.spelers = json)
  }
}
