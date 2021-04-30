import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { DriversService } from 'src/app/core/services/http/drivers.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DriversFormData } from 'src/app/core/models/drivers-form-data';  
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss']
})
export class DriverEditComponent implements OnInit {

  driverId!: number;
  driversForm!: FormGroup;

  drivers$!: Observable<Drivers>;
  constructor(private _snackBar: MatSnackBar,private fb: FormBuilder,private _driversService: DriversService,private _activateRoute:ActivatedRoute,) { }
  

  ngOnInit(): any {
    this.driverId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.driverId) {
      this.fetchData(this.driverId);
    }

  

    this.driversForm = this.fb.group({
      name:['', [Validators.required,this.noWhitespaceValidator]],
      country:['', [Validators.required,this.noWhitespaceValidator]],
      podiums:['', [Validators.required]],
      points:['', [Validators.required]],
      team_name:['', [Validators.required,this.noWhitespaceValidator]],
      gp:['', [Validators.required]],
      champion:['', [Validators.required]],
      drivernb:['', [Validators.required]],
      age:['', [Validators.required]],
      dob:['', [Validators.required,this.noWhitespaceValidator]],
      picture:['', [Validators.required,this.noWhitespaceValidator]],
      flag:['', [Validators.required,this.noWhitespaceValidator]],
      city:['', [Validators.required,this.noWhitespaceValidator]],
      join_f1:['', [Validators.required]]

    }); 

    
  }


  fetchData(id: number): void {
    this.drivers$ = this._driversService.getById(id)
    };
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
  onSubmit(drivers: Drivers) {
    if (this.driversForm.valid) {
        this._driversService.put(drivers,this.driverId).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE updated A driver");
          this.openSnackBar("Driver Updated","Nice")
        })
    }
  }
    public noWhitespaceValidator(control: FormControl) {
      const isWhitespace = (control.value || '').trim().length === 0;
  
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    }
  }
