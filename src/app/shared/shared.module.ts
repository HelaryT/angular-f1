import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatTableModule} from '@angular/material/table'; 

import {MatMenuModule} from '@angular/material/menu'; 

import {MatCardModule} from '@angular/material/card'; 

import {MatIconModule} from '@angular/material/icon'; 


import {MatTabsModule} from '@angular/material/tabs'; 
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule
    
  ]
})
export class SharedModule { }
