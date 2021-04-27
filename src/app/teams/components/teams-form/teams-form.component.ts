import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Championships } from 'src/app/core/models/championships';
import { Drivers } from 'src/app/core/models/drivers';
import { Teams } from 'src/app/core/models/teams';
import { ChampionshipsService } from 'src/app/core/services/http/championships.service';
import { DriversService } from 'src/app/core/services/http/drivers.service';
import { TeamsService } from 'src/app/core/services/http/teams.service';

@Component({
  selector: 'app-teams-form',
  templateUrl: './teams-form.component.html',
  styleUrls: ['./teams-form.component.scss']
})
export class TeamsFormComponent implements OnInit {
  teamsId?: number;
  champsId?: number;
  teams$? : Observable<Teams[]>;

 
  teamsForm!: FormGroup;
  currentRouter: any;
  name = '';
  headchief= '';
  headtech= '';
  base= '';
  flag= '';
  startyear= '';
  logo= '';
  teampoint= '';
  teamchampionships= '';

  handleClear(){
    this.name = ' ';  
    this.headchief = ' ';  
    this.headtech = ' ';  
    this.flag = ' ';  
    this.startyear = ' ';  
    this.teampoint = ' ';  
    this.logo = ' ';  
    this.base = ' ';  
    this.teamchampionships = ' ';  

  }

  isEditable = false;
  constructor(private _formBuilder: FormBuilder,private _activateRoute:ActivatedRoute,private _driversService:DriversService,private _teamsService:TeamsService,private _championshipsService:ChampionshipsService) {}

  ngOnInit() {
    this.champsId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.champsId) {
      this.fetchData(this.champsId);
    } 


    this.teamsForm = this._formBuilder.group({
      name:['', Validators.required],
      headchief:['', Validators.required],
      headtech:['', Validators.required],
      base:['', Validators.required],
      flag:['', Validators.required],
      startyear:['', Validators.required],
      logo:['', Validators.required],
      teampoint:['', Validators.required],
      teamchampionships:['', Validators.required],
      championshipid:[this.champsId, Validators.required]
    });
  }

  onSubmit(drivers : Drivers) {
    this._driversService.post(drivers).subscribe((next) => {
          
      console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
  })
}

teamsFormSend(){
  console.log(this.teamsForm.value);
  this._driversService.post(this.teamsForm.value).subscribe((next) => {
          
    console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
})
}

fetchData(id: number){
  this.teams$ = this._teamsService.getTeamsPerChampionships(id);
 }
}