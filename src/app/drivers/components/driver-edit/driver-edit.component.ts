import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { DriversService } from 'src/app/core/services/http/drivers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriversFormData } from 'src/app/core/models/drivers-form-data';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss']
})
export class DriverEditComponent implements OnInit {

  driverId!: number;
  driversForm!: FormGroup;

  drivers$!: Observable<Drivers>;
  drivers: any;
  constructor(private fb: FormBuilder,private _driversService: DriversService,private _activateRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.driverId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.driverId) {
      this.fetchData(this.driverId);
    }

    this.driversForm = this.fb.group({
      name:['', [Validators.required]],
      country:['', [Validators.required]],
      podiums:['', [Validators.required]],
      points:['', [Validators.required]],
      team_name:['', [Validators.required]],
      gp:['', [Validators.required]],
      champion:['', [Validators.required]],
      drivernb:['', [Validators.required]],
      dob:['', [Validators.required]],
      picture:['', [Validators.required]],
      flag:['', [Validators.required]],
      city:['', [Validators.required]],
      join_f1:['', [Validators.required]]

    }); 

    
  }


  fetchData(id: number): void {
    this.drivers$ = this._driversService.getById(id);
  }

  onSubmit(drivers: Drivers) {
        this._driversService.put(drivers,this.driverId).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE updated A STUDENT");
        })
      
    }
  }

