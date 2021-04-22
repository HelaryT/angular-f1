import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionshipsComponent } from './championships.component';
import { ChampionshipsListComponent } from './pages/championships-list/championships-list.component';
import { ChampionshipsDetailComponent } from './pages/championships-detail/championships-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipsComponent,
    children: [
      {
        path: '',
        component: ChampionshipsListComponent,
      },
      {
        path: 'championships',
        component: ChampionshipsListComponent,
      },
      {
        path: ':id',
        component: ChampionshipsDetailComponent,
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionshipsRoutingModule { }
