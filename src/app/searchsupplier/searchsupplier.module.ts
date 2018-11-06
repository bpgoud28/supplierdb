import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {SearchsupplierRoutingModule} from './searchsupplier.routing.module';
import {SearchsupplierComponent} from './searchsupplier.component';
import {SearchSupplierService} from '../shared/services/searchsupplier.service';

@NgModule({
  imports: [
    CommonModule,
    SearchsupplierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchsupplierComponent
  ],
  providers: [
    SearchSupplierService
  ]
})
export class SearchsupplierModule { }
