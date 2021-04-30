import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './pages/drivers-list/drivers-list.component';
import { DriversDetailComponent } from './pages/drivers-detail/drivers-detail.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DriversFormComponent } from './components/drivers-form/drivers-form.component';
import { DriverEditComponent } from './components/driver-edit/driver-edit.component';



@NgModule({
  declarations: [
    DriversComponent,
    DriversListComponent,
    DriversDetailComponent,
    DriversFormComponent,
    DriverEditComponent
  ],
  imports: [
    CommonModule,DriversRoutingModule,SharedModule
  ]
})
export class DriversModule { }
