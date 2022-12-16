import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jaren:any;

  constructor(private json: JsonService) { }
  ngOnInit(): void {
      // Haalt alle jaren op die in de json query staan
    this.json.getYears().subscribe(json => this.jaren = json)
  }

}
