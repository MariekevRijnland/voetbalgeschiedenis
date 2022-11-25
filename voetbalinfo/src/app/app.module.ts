import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { SpelersComponent } from './spelers/spelers.component';
import { MatchesComponent } from './matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    SpelersComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
