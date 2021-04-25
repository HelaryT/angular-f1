import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Championships } from 'src/app/core/models/championships';
import { ChampionshipsFormData } from 'src/app/core/models/championships-form-data';
import { ChampionshipsService } from 'src/app/core/services/http/championships.service';

@Component({
  selector: 'app-championships-form',
  templateUrl: './championships-form.component.html',
  styleUrls: ['./championships-form.component.scss']
})
export class ChampionshipsFormComponent implements OnInit {
  championshipsForm: FormGroup;

  formAction: string; 

  constructor(
    private fb: FormBuilder,
    private _championshipsService: ChampionshipsService,
    private _dialogRef: MatDialogRef<ChampionshipsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChampionshipsFormData
  ) {
    this.formAction = data.toUpdate? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.championshipsForm = this.fb.group({
        name: [data.championships.name, [Validators.required, this.noWhitespaceValidator]],
        years: [data.championships.years, [Validators.required, this.noWhitespaceValidator]],
        logo: [data.championships.logo, [Validators.required]],
        nb_team: [data.championships.nb_team, [Validators.required, this.noWhitespaceValidator]],
        nb_driver: [data.championships.nb_driver, [Validators.required, this.noWhitespaceValidator]],


      })
    }
    else {
      this.championshipsForm = this.fb.group({
        name: ['', [Validators.required, this.noWhitespaceValidator]],
        years: ['', [Validators.required, this.noWhitespaceValidator]],
        logo: ['', [Validators.required]],
        nb_team: ['', [Validators.required, this.noWhitespaceValidator]],
        nb_driver: ['', [Validators.required, this.noWhitespaceValidator]],

      })
    }

  }

  ngOnInit(): void {
  }

  onSubmit(championships: Championships) {
    if (this.championshipsForm.valid) {

      if (this.data.toUpdate) {
        championships.id = this.data.championships.id;
        this._championshipsService.put(championships).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE updated A Championship");
          this.championshipsForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._championshipsService.post(championships).subscribe((next) => {
          
          console.log("YES WE DID IT !!! WE HAVE ADDED A NEW Championship");
          this.championshipsForm.reset();
          this._dialogRef.close();

        })
      }


    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
