import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-jaren',
  templateUrl: './jaren.component.html',
  styleUrls: ['./jaren.component.scss']
})
export class JarenComponent implements OnInit {

  
  jaren:any;
  constructor(private json: JsonService) { }

  ngOnInit(): void {
    this.json.getyears().subscribe(json => this.jaren = json)
  }

}
