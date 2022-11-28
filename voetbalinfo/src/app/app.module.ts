import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { SpelersComponent } from './spelers/spelers.component';
import { MatchesComponent } from './matches/matches.component';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { JarenComponent } from './jaren/jaren.component';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    SpelersComponent,
    MatchesComponent,
    NavigatieComponent,
    JarenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
