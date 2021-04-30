import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { DriversService } from 'src/app/core/services/http/drivers.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DriversFormData } from 'src/app/core/models/drivers-form-data';  
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss']
})
export class DriverEditComponent implements OnInit {

  driverId!: number;
  driversForm!: FormGroup;

  drivers$!: Observable<Drivers>;
  constructor(private _dialogRef: MatDialogRef<DriverEditComponent>,private _snackBar: MatSnackBar,private fb: FormBuilder,private _driversService: DriversService,private _activateRoute:ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: DriversFormData) {
    
    this.driversForm = this.fb.group({
      name:[data.drivers.name, [Validators.required,this.noWhitespaceValidator]],
      country:[data.drivers.country, [Validators.required,this.noWhitespaceValidator]],
      podiums:[data.drivers.podiums, [Validators.required]],
      points:[data.drivers.points, [Validators.required]],
      team_name:[data.drivers.team_name, [Validators.required,this.noWhitespaceValidator]],
      gp:[data.drivers.gp, [Validators.required]],
      champion:[data.drivers.champion, [Validators.required]],
      drivernb:[data.drivers.drivernb, [Validators.required]],
      age:[data.drivers.age, [Validators.required]],
      dob:[data.drivers.dob, [Validators.required,this.noWhitespaceValidator]],
      picture:[data.drivers.picture, [Validators.required,this.noWhitespaceValidator]],
      flag:[data.drivers.flag, [Validators.required,this.noWhitespaceValidator]],
      city:[data.drivers.city, [Validators.required,this.noWhitespaceValidator]],
      join_f1:[data.drivers.join_f1, [Validators.required]]

    }); 
   }
  

  ngOnInit(): any {
    this.driverId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.driverId) {
      this.fetchData(this.driverId);
    }

  

    

    
  }


  fetchData(id: number): void {
    this.drivers$ = this._driversService.getById(id)
    };
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
    onSubmit(drivers: Drivers){
      if (this.driversForm.valid) {
          drivers.id = this.data.drivers.id;
          this._driversService.put(drivers).subscribe((next) => {
            console.log("YES WE DID IT !!! WE HAVE updated A champ");
            this.openSnackBar("Driver Updated","Nice")
            this.driversForm.reset();
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
