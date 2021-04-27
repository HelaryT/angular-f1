import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsDetailComponent } from './pages/teams-detail/teams-detail.component';
import { TeamsListComponent } from './pages/teams-list/teams-list.component';
import { TeamsComponent } from './teams.component';
import { TeamsFormComponent } from './components/teams-form/teams-form.component';
import { DriversFormComponent } from '../drivers/components/drivers-form/drivers-form.component';

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
        path: 'add',
        component: TeamsFormComponent,
      },
      {
        path: ':id/add',
        component: DriversFormComponent,
      },
      {
        path: 'teams',
        component: TeamsListComponent,
      },
      {
        path: ':id',
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
