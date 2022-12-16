import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.scss']
})
export class SpelersComponent implements OnInit {
  players:any;
  constructor(private json: JsonService) { }
  ngOnInit(): void {
      // Haalt alle jaren op die in de json query staan
    this.json.getPlayers().subscribe(json => this.players = json)
  }
}
