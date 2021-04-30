import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { Teams } from 'src/app/core/models/teams';
import { TeamsFormData } from 'src/app/core/models/teams-form-data';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: TeamsFormData,private _dialogRef: MatDialogRef<TeamEditComponent>,private _snackBar: MatSnackBar,private fb: FormBuilder,private _teamsService: TeamsService,private _activateRoute:ActivatedRoute) 
  {
    this.teamsForm = this.fb.group({
      name:[data.teams.name, [Validators.required,this.noWhitespaceValidator]],
      headchief:[data.teams.headchief, [Validators.required,this.noWhitespaceValidator]],
      headtech:[data.teams.headtech, [Validators.required,this.noWhitespaceValidator]],
      base:[data.teams.base, [Validators.required,this.noWhitespaceValidator]],
      flag:[data.teams.flag, [Validators.required,this.noWhitespaceValidator]],
      startyear:[data.teams.startyear, [Validators.required]],
      logo:[data.teams.logo, [Validators.required,this.noWhitespaceValidator]],
      car:[data.teams.car, [Validators.required,this.noWhitespaceValidator]],
      teampoint:[data.teams.teampoint, [Validators.required]],
      teamchampionships:[data.teams.teamchampionships, [Validators.required]],
    }); 
  }

  ngOnInit(): void {
    this.teamId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.teamId) {
      this.fetchData(this.teamId);
    }
    
  }

  fetchData(id: number): void {
    this.teams$ = this._teamsService.getById(id);

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  onSubmit(teams: Teams){

      if (this.data.toUpdate) {
        teams.id = this.data.teams.id;
        this._teamsService.put(teams).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE updated A champ");
          this.openSnackBar("Teams Updated","Nice")
          this.teamsForm.reset();
          this._dialogRef.close();
        })
      }
    }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
  
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
