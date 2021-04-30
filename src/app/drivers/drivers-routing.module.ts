import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './pages/drivers-list/drivers-list.component';
import { DriversDetailComponent } from './pages/drivers-detail/drivers-detail.component';
import { DriversFormComponent } from './components/drivers-form/drivers-form.component';
import { DriverEditComponent } from './components/driver-edit/driver-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DriversComponent,
    children: [
      {
        path: '',
        component: DriversListComponent,
      },
      {
        path: ':id/add',
        component: DriversFormComponent,
      },
      {
        path: ':id/edit',
        component: DriverEditComponent,
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
        path: ':id',
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
