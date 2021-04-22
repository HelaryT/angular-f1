import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Championships } from 'src/app/core/models/championships';
import { ChampionshipsService } from 'src/app/core/services/http/championships.service';

@Component({
  selector: 'app-championships-detail',
  templateUrl: './championships-detail.component.html',
  styleUrls: ['./championships-detail.component.scss']
})
export class ChampionshipsDetailComponent implements OnInit {
  championshipsId?:number;
  championships$? : Observable<Championships>;
 
  constructor(private _championshipsService: ChampionshipsService, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.championshipsId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.championshipsId) {
      this.fetchData(this.championshipsId);
    }
  }

  fetchData(id: number): void {
    this.championships$ = this._championshipsService.getById(id);
  }

}
