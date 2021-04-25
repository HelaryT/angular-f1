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

  drivers1!: FormGroup;
  drivers2!: FormGroup;

  isEditable = false;
  constructor(private _formBuilder: FormBuilder,private _activateRoute:ActivatedRoute,private _driversService:DriversService,private _teamsService:TeamsService,private _championshipsService:ChampionshipsService) {}

  ngOnInit() {
    this.teamsId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.teamsId) {
      this.fetchData(this.teamsId);
    } 


    this.drivers1 = this._formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      podiums: ['', Validators.required],
      drivernb: ['', Validators.required],
      points: ['', Validators.required],
      gp: ['', Validators.required],
      champion: ['', Validators.required],
      dob: ['', Validators.required],
      picture: ['', Validators.required],
      flag: ['', Validators.required],
      championshipsid: [2, Validators.required],
      teamsid: [this.teamsId, Validators.required]

    });
    this.drivers2 = this._formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      podiums: ['', Validators.required],
      drivernb: ['', Validators.required],
      points: ['', Validators.required],
      gp: ['', Validators.required],
      champion: ['', Validators.required],
      dob: ['', Validators.required],
      picture: ['', Validators.required],
      flag: ['', Validators.required],
      championshipsid: ['', Validators.required],
      teamsid: ['', Validators.required]
    });
  }

  onSubmit(drivers : Drivers) {
    this._driversService.post(drivers).subscribe((next) => {
          
      console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
  })
}

drivers11(){
  console.log(this.drivers1.value);
  this._driversService.post(this.drivers1.value).subscribe((next) => {
          
    console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
})
}

drivers22(){
  console.log(this.drivers2.value);
  this._driversService.post(this.drivers2.value).subscribe((next) => {
          
    console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
})
}

fetchData(id: number){
  this.teams$ = this._teamsService.getTeamsPerChampionships(id);
 }
}