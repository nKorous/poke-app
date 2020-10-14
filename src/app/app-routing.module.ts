import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PokeDashboardComponent } from './poke-dashboard/poke-dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pokeList'},
  { path: 'pokeList', component: PokeListComponent},
  { path: 'pokeDashboard', component: PokeDashboardComponent},

  //needs to be last
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
