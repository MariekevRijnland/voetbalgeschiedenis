import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient) {}
  getYears(){
    // Haalt alle data op uit de query/link
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
  getmatches(){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatches');
  }
  getPlayers(){
    return this.http.get('https://k0497.azurewebsites.net/api/players/getallplayers');
  }
}
