import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsDetailComponent } from './pages/teams-detail/teams-detail.component';
import { TeamsListComponent } from './pages/teams-list/teams-list.component';
import { SharedModule } from '../shared/shared.module';
import { TeamsRoutingModule } from './teams-routing.module';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamsDetailComponent,
    TeamsListComponent
  ],
  imports: [
    CommonModule,SharedModule,TeamsRoutingModule
  ]
})
export class TeamsModule { }
