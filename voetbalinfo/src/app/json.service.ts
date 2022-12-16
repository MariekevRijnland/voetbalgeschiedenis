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
  getMatchesByYear(year:any){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatchesbyyear?year='+year+'&type=json');
  }
  getPlayersByID(matchid:any){
    return this.http.get('https://k0497.azurewebsites.net/api/players/getallplayersbymatch?matchid='+matchid+'&type=json');
  }
  getFlag(country:any){
    return this.http.get('https://countryflagsapi.com/svg/'+country);
  }
}
