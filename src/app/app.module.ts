import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material'
import { DxDataGridModule, DxChartModule, DxPieChartModule } from 'devextreme-angular';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PokeDashboardComponent } from './poke-dashboard/poke-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout'

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    PokeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DxDataGridModule,
    DxChartModule,
    DxPieChartModule,
    MatMenuModule,
    MatGridListModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
