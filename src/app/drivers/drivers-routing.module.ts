import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './pages/drivers-list/drivers-list.component';
import { DriversDetailComponent } from './pages/drivers-detail/drivers-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DriversComponent,
    children: [
      {
        path: '',
        pathMatch : 'full',
        component: DriversListComponent,
      },
      {
        path: 'drivers',
        component: DriversListComponent,
      },
      {
        path: 'drivers/:id',
        component: DriversDetailComponent,
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
export class DriversRoutingModule { }
