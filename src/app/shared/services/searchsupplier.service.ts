import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SearchSupplierService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4200';
  getSupplier() {
    return this
      .http
      .get(`${this.url}/Suppliers`);
  }
}

