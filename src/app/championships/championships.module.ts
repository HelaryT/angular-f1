import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionshipsComponent } from './championships.component';
import { ChampionshipsListComponent } from './pages/championships-list/championships-list.component';
import { ChampionshipsDetailComponent } from './pages/championships-detail/championships-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ChampionshipsRoutingModule } from './championships-routing.module';
import { ChampionshipsFormComponent } from './components/championships-form/championships-form.component';



@NgModule({
  declarations: [
    ChampionshipsComponent,
    ChampionshipsListComponent,
    ChampionshipsDetailComponent,
    ChampionshipsFormComponent
  ],
  imports: [
    CommonModule,SharedModule,ChampionshipsRoutingModule
  ]
})
export class ChampionshipsModule { }
