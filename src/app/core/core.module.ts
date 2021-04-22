import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamsService } from './services/http/teams.service';
import { DriversService } from './services/http/drivers.service';
import { ChampionshipsService } from './services/http/championships.service';

@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],  
  providers:[TeamsService,DriversService,ChampionshipsService],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
  

})
export class CoreModule { }
