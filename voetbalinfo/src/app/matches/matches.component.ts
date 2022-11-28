import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public matchInfo: any;
  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    const url: string = '/assets/matchdata.json';
    this.http.get(url).subscribe((response) => {
      this.matchInfo = response;
    });
  }

}
