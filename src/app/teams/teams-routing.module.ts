import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsDetailComponent } from './pages/teams-detail/teams-detail.component';
import { TeamsListComponent } from './pages/teams-list/teams-list.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: '',
        pathMatch : 'full',
        component: TeamsListComponent,
      },
      {
        path: 'teams',
        component: TeamsListComponent,
      },
      {
        path: 'teams/:id',
        component: TeamsDetailComponent,
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
export class TeamsRoutingModule { }
