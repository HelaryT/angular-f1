import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardsListComponent } from './pages/leaderboards-list/leaderboards-list.component';
import { LeaderboardsComponent } from './leaderboards.component';


const routes: Routes = [
  {
    path: '',
    component: LeaderboardsComponent,
    children: [
      {
        path: '',
        pathMatch : 'full',
        component: LeaderboardsListComponent,
      },
      {
        path: 'leaderboards',
        component: LeaderboardsListComponent,
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardsRoutingModule { }
