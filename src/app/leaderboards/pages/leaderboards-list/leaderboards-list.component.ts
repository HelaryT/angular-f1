import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { Teams } from 'src/app/core/models/teams';
import { DriversService } from 'src/app/core/services/http/drivers.service';
import { TeamsService } from 'src/app/core/services/http/teams.service';

@Component({
  selector: 'app-leaderboards-list',
  templateUrl: './leaderboards-list.component.html',
  styleUrls: ['./leaderboards-list.component.scss']
})
export class LeaderboardsListComponent implements OnInit {

  drivers$!: Observable<Drivers[]>;
  displayedColumns: string[] = ["id", "name","team_name","flag","points"];
  champsId?: number;

  teams$!: Observable<Teams[]>;
  displayedColumns2: string[] = ["id", "name","headchief","flag","teampoint"];

  constructor(private _activateRoute:ActivatedRoute,private _driversService: DriversService,private _teamsService: TeamsService) { }

  ngOnInit(): void {
    this.champsId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.champsId) {
      this.fetchData(this.champsId);
    }   
  }
  fetchData(id: number){
    this.drivers$ = this._driversService.getOrder(id);
    this.teams$ = this._teamsService.getOrder(id);  
   }
}
