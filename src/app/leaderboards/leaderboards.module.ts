import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardsComponent } from './leaderboards.component';
import { LeaderboardsListComponent } from './pages/leaderboards-list/leaderboards-list.component';
import { LeaderboardsRoutingModule } from './leaderboards-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LeaderboardsComponent,
    LeaderboardsListComponent
  ],
  imports: [
    CommonModule,
    LeaderboardsRoutingModule,
    SharedModule
  ]
})
export class LeaderboardModule { }
