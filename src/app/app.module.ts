import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';//for selection box//
import {MatFormFieldModule} from '@angular/material/form-field';//for selection box//
import {MatInputModule} from '@angular/material/input';//for selection box//
import {MatTableModule} from '@angular/material/table';//for table//
import {MatPaginatorModule} from '@angular/material/paginator';//pagination
import { MatSortModule} from '@angular/material/sort';
import { NgChartsModule } from 'ng2-charts';//for chart

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoinListComponent } from './pages/coin-list/coin-list.component';
import { CoinDetailsComponent } from './pages/coin-details/coin-details.component';
import {HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
