import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jaar:any;

  constructor(private json: JsonService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.jaar = params['year']);
  }
  ngOnInit(): void {
      // Haalt alle jaren op die in de json query staan
    this.json.getYears().subscribe(json => this.jaar = json);
    
  }

}
