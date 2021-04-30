import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private _snackBar: MatSnackBar,private fb: FormBuilder,private _teamsService: TeamsService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.teamId) {
      this.fetchData(this.teamId);
    }
    this.teamsForm = this.fb.group({
      name:['', [Validators.required,this.noWhitespaceValidator]],
      headchief:['', [Validators.required,this.noWhitespaceValidator]],
      headtech:['', [Validators.required,this.noWhitespaceValidator]],
      base:['', [Validators.required,this.noWhitespaceValidator]],
      flag:['', [Validators.required,this.noWhitespaceValidator]],
      startyear:['', [Validators.required]],
      logo:['', [Validators.required,this.noWhitespaceValidator]],
      car:['', [Validators.required,this.noWhitespaceValidator]],
      teampoint:['', [Validators.required]],
      teamchampionships:['', [Validators.required]],
    }); 
  }

  fetchData(id: number): void {
    this.teams$ = this._teamsService.getById(id);

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  onSubmit(teams: Teams) {
    if (this.teamsForm.valid) {
    this._teamsService.put(teams,this.teamId).subscribe((next) => {
      console.log("YES WE DID IT !!! WE HAVE updated A team");
      this.openSnackBar("Updated team","Nice");
    })
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
  
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
