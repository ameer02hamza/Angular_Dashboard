import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './dashboard/hearder/hearder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatBadgeModule} from '@angular/material/badge';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatButtonModule} from "@angular/material/button";
import { SidenavbarComponent } from './dashboard/sidenavbar/sidenavbar.component';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card'; 
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DnutchartComponent } from './dashboard/dnutchart/dnutchart.component';

const material =[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  
];

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    SidenavbarComponent,
    BarChartComponent,
    DnutchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    material,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
