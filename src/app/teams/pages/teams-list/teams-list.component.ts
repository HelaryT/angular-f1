import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams } from 'src/app/core/models/teams';
import { TeamsService } from 'src/app/core/services/http/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  teams$? : Observable<Teams[]>;
 
  constructor(private _teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
   this.teams$ = this._teamsService.get();
  }

}
