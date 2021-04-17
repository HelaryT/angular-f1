import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'championships',
    pathMatch: 'full',
    loadChildren: () =>
      import('./championships/championships.module').then((m) => m.ChampionshipsModule),
  },
  {
    path: 'teams',
    pathMatch: 'full',
    loadChildren: () =>
      import('./teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'drivers',
    data:{id:1},//faire automation
    loadChildren: () =>
      import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
