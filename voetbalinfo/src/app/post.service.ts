import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getMatchPage(): Observable<any> {
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatches');
  } 
  getPlayerPage(): Observable<any> {
    return this.http.get('https://k0497.azurewebsites.net/api/players/getallplayers');
  }
}