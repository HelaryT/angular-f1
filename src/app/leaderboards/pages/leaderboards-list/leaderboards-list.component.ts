import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ["id", "name","drivernb","flag","points"];

  teams$!: Observable<Teams[]>;
  displayedColumns2: string[] = ["id", "name","headchief","flag","teampoint"];

  constructor(private _driversService: DriversService,private _teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.drivers$ = this._driversService.getOrder();
    this.teams$ = this._teamsService.getOrder();

  }
}
