import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { Teams } from 'src/app/core/models/teams';
import { TeamsService } from 'src/app/core/services/http/teams.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  teamId!: number;
  teamsForm!: FormGroup;

  teams$!: Observable<Teams>;
  constructor(private fb: FormBuilder,private _teamsService: TeamsService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.teamId) {
      this.fetchData(this.teamId);
    }
    this.teamsForm = this.fb.group({
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
    }); 
  }

  fetchData(id: number): void {
    this.teams$ = this._teamsService.getById(id);

  }

  onSubmit(teams: Teams) {
    if (this.teamsForm.valid) {
    this._teamsService.put(teams,this.teamId).subscribe((next) => {
      console.log("YES WE DID IT !!! WE HAVE updated A STUDENT");
    })
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
  
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
