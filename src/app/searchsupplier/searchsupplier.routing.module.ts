import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchsupplierComponent} from './searchsupplier.component';

const routes: Routes = [
  { path: '', component: SearchsupplierComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchsupplierRoutingModule { }
