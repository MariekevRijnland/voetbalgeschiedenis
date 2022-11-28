import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient) {}
  getyears(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
}
