import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private selectedCurrency$ : BehaviorSubject<string> = new BehaviorSubject<string>("INR");
  constructor() { }

  getcurrency(){
    return this.selectedCurrency$.asObservable();
  }
  setcurrency(currency:string){
    this.selectedCurrency$.next(currency)
  }
}
