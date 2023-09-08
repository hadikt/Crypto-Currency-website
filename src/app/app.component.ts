import { Component } from '@angular/core';
import * as e from 'express';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectcurrency :string = 'INR'
constructor( private curencyservice:CurrencyService){}
changecurrency(event:string){
  console.log(event);
this.curencyservice.setcurrency (event);
}
}
