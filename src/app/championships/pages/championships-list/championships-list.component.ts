import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Championships } from 'src/app/core/models/championships';
import { ChampionshipsFormData } from 'src/app/core/models/championships-form-data';
import { ChampionshipsService } from 'src/app/core/services/http/championships.service';
import { ChampionshipsFormComponent } from '../../components/championships-form/championships-form.component';
@Component({
  selector: 'app-championships-list',
  templateUrl: './championships-list.component.html',
  styleUrls: ['./championships-list.component.scss']
})
export class ChampionshipsListComponent implements OnInit {

  championships$? : Observable<Championships[]>;
 
  constructor(private _championshipsService: ChampionshipsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
   this.championships$ = this._championshipsService.get();
  } 

  delete(championships: Championships){
    this._championshipsService.delete(championships).subscribe(next => {
      this.loadData();
    })
  }
 
  openDialog(toUpdate: boolean, championships?: Championships){

    const championshipsFormData: ChampionshipsFormData = {
      toUpdate: toUpdate,
      championships!: championships!
    };

    const dialogRef = this.dialog.open(ChampionshipsFormComponent,{
      data: championshipsFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }
}
