import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Championships } from 'src/app/core/models/championships';
import { ChampionshipsService } from 'src/app/core/services/http/championships.service';
import { TeamsService } from 'src/app/core/services/http/teams.service';


@Component({
  selector: 'app-championships-form',
  templateUrl: './championships-form.component.html',
  styleUrls: ['./championships-form.component.scss']
})
export class ChampionshipsFormComponent implements OnInit {
  championshipsForm!: FormGroup;

  
  championships$? : Observable<Championships[]>;

  loadData(){
    this.championships$ = this._championshipsService.get();
   } 
  constructor(private router: Router,private _activateRoute: ActivatedRoute,private _formBuilder: FormBuilder,private _championshipsService:ChampionshipsService,private _teamsService:TeamsService) {}

  ngOnInit() {
    this.loadData();

    this.championshipsForm = this._formBuilder.group({
      name: ['', Validators.required],
      years: ['', Validators.required],
      logo: ['', Validators.required]

    });
  
  }

  ChampionshipFormSend(){
    console.log(this.championshipsForm.value);
    this._championshipsService.post(this.championshipsForm.value).subscribe((next) => {
            
      console.log("YES WE DID IT !!! WE HAVE ADDED A NEW drivers");
  })
  }
  
}

