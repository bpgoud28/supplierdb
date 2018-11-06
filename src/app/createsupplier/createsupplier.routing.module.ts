import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatesupplierComponent} from './createsupplier.component';

const routes: Routes = [
  { path: '', component: CreatesupplierComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatesupplierRoutingModule { }
