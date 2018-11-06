import { Component, OnInit } from '@angular/core';
import {SortPipe, DateSortPipe} from '../shared/pipes';
import {SearchSupplierService} from '../shared/services/searchsupplier.service';

@Component({
  selector: 'app-searchsupplier',
  templateUrl: './searchsupplier.component.html',
  styleUrls: ['./searchsupplier.component.scss'],
  providers: [SearchSupplierService, SortPipe , DateSortPipe]
})

export class SearchsupplierComponent implements OnInit {
  sortType: string = 'ASC';
  length: number;
  suppliers: Supplier[];
  public show: boolean = false;
  constructor(private searchSupplierservice: SearchSupplierService, private sortpipe: SortPipe, private datesort: DateSortPipe) { }
  ngOnInit() {
    this.searchSupplierservice
      .getSupplier()
      .subscribe((data: Supplier[]) => {
        this.suppliers = data;
      });
  }
  sortSearch(path: string, datesort?: boolean) {
    this.sortType = (this.sortType === 'ASC') ? 'DESC' : 'ASC'
    if(this.sortType !== 'ASC'){
      if(!datesort) {
        this.suppliers = this.sortpipe.transform(this.suppliers, path);
      } else {
        this.suppliers = this.datesort.transform(this.suppliers, path);
      }
    } else {
      if(!datesort) {
        this.suppliers = this.sortpipe.transform(this.suppliers, path).reverse();
      } else {
        this.suppliers = this.datesort.transform(this.suppliers, path).reverse();
      }
    }
  }
  searchSupplier() {
    this.show = !this.show;
  }
}

export interface Supplier {
  'Supplier Name': string;
  'Supplier Ref': string;
  'Country': string;
  'Registration': string;
  'Tax Ref': string;
  'Supplier Status': string;
  'Compliance Status': string;
}
