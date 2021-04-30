import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  champsId!: number;
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
  team_color='';
  car='';

  handleClear(){
    this.name = '';  
    this.headchief = '';  
    this.headtech = '';  
    this.flag = '';  
    this.startyear = '';  
    this.teampoint = '';  
    this.logo = '';  
    this.base = '';  
    this.teamchampionships = '';  
    this.team_color = '';  
    this.car = '';    


  }

  isEditable = false;
  constructor(private _formBuilder: FormBuilder,private _activateRoute:ActivatedRoute,private _driversService:DriversService,private _teamsService:TeamsService,private _championshipsService:ChampionshipsService) {}

  ngOnInit() {
    this.champsId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.champsId) {
      this.fetchData(this.champsId);
    } 


    this.teamsForm = this._formBuilder.group({
      name:['', Validators.required,this.noWhitespaceValidator],
      headchief:['', Validators.required,this.noWhitespaceValidator],
      headtech:['', Validators.required,this.noWhitespaceValidator],
      base:['', Validators.required,this.noWhitespaceValidator],
      flag:['', Validators.required,this.noWhitespaceValidator],
      startyear:['', Validators.required],
      logo:['', Validators.required,this.noWhitespaceValidator],
      car:['', Validators.required,this.noWhitespaceValidator],
      team_color:['', Validators.required,this.noWhitespaceValidator],
      teampoint:['', Validators.required,this.noWhitespaceValidator],
      teamchampionships:['', Validators.required],
      championshipid:[this.champsId, Validators.required]
    });
  }




teamsFormSend(){
  if (this.teamsForm.valid) {

  console.log(this.teamsForm.value);
  this._teamsService.post(this.teamsForm.value).subscribe((next) => {
          
    console.log("YES WE DID IT !!! WE HAVE ADDED A NEW team");
  })
  }
}

fetchData(id: number){
  this.teams$ = this._teamsService.getTeamsPerChampionships(id);
 }
 public noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;

  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}
}