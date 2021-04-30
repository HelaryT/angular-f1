import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Championships } from 'src/app/core/models/championships';
import { ChampionshipsFormData } from 'src/app/core/models/championships-form-data';
import { Teams } from 'src/app/core/models/teams';
import { TeamsService } from 'src/app/core/services/http/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  champsId?: number;

  teams$? : Observable<Teams[]>;
 
  constructor(private _teamsService: TeamsService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.champsId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.champsId) {
      this.fetchData(this.champsId);
    } 
  }

  fetchData(id: number){
    this.teams$ = this._teamsService.getTeamsPerChampionships(id);
   }

}
