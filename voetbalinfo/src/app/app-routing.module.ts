import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';
import { SpelersComponent } from './spelers/spelers.component';
import { TeamsComponent } from './teams/teams.component';
import { JarenComponent } from './jaren/jaren.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jaren',
    component: JarenComponent
  },
  {
    path: 'matches/:year',
    component: MatchesComponent
  },
  {
    path: 'spelers/:matchid',
    component: SpelersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
