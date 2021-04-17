import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './pages/drivers-list/drivers-list.component';
import { DriversDetailComponent } from './pages/drivers-detail/drivers-detail.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DriversComponent,
    DriversListComponent,
    DriversDetailComponent
  ],
  imports: [
    CommonModule,DriversRoutingModule,SharedModule
  ]
})
export class DriversModule { }
