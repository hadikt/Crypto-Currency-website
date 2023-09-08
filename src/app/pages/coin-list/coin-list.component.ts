import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';
@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit{
  currency:string="INR"
banner:any=[];
dataSource!: MatTableDataSource<any>;
displayedColumns:string[]=['symbol','current_price','price_change_percentage_24h','market_cap']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
  this.getalldata()
  this.getBannerData()
  this.currencyservice.getcurrency().subscribe(val=>{
    this.currency=val
    this.getBannerData()
    this.getalldata()
  })
  }
constructor(private APi:ApiService,private router:Router, private currencyservice:CurrencyService){

}
getBannerData(){
  this.APi.getTrendingCurrrency(this.currency).subscribe(res=>{
  console.log(res);
  console.log("hello");
  this.banner=res

  })
}

getalldata(){
  this.APi.getcurrencyData(this.currency).subscribe(res=>{
  console.log(res);
  console.log("hiss");
  this.dataSource = new MatTableDataSource(res);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

  })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
gotDetails(row:any ){
this.router.navigate(['coin-details',row.id])
}
// 1.15
}
