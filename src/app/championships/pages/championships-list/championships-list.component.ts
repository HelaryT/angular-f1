import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Championships } from 'src/app/core/models/championships';
import { ChampionshipsService } from 'src/app/core/services/http/championships.service';

@Component({
  selector: 'app-championships-list',
  templateUrl: './championships-list.component.html',
  styleUrls: ['./championships-list.component.scss']
})
export class ChampionshipsListComponent implements OnInit {

  championships$? : Observable<Championships[]>;
 
  constructor(private _championshipsService: ChampionshipsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
   this.championships$ = this._championshipsService.get();
  }

}
