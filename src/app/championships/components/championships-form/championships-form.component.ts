import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChampionshipsService } from 'src/app/core/services/http/championships.service';
import { TeamsService } from 'src/app/core/services/http/teams.service';


@Component({
  selector: 'app-championships-form',
  templateUrl: './championships-form.component.html',
  styleUrls: ['./championships-form.component.scss']
})
export class ChampionshipsFormComponent implements OnInit {
  championshipsForm!: FormGroup;
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
  constructor(private router: Router,private _formBuilder: FormBuilder,private _championshipsService:ChampionshipsService,private _teamsService:TeamsService) {}

  ngOnInit() {
    this.championshipsForm = this._formBuilder.group({
      name: ['', Validators.required],
      years: ['', Validators.required],
      logo: ['', Validators.required]

    });
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
      championshipid:[2, Validators.required]
      });
  }

  ChampionshipFormSend(){
    console.log(this.championshipsForm.value);
    this._championshipsService.post(this.championshipsForm.value).subscribe((next) => {
            
      console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
  })
  }
  teamsFormSend(){
    console.log(this.teamsForm.value);
    this._teamsService.post(this.teamsForm.value).subscribe((next) => {
            
      console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
  })
  }

  reload(){
    this.router.navigate([this.router.url]);  
  }
}

