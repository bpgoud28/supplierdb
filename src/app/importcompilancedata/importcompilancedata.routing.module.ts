import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportcompilancedataComponent} from './importcompilancedata.component';

const routes: Routes = [
  { path: '', component: ImportcompilancedataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportcompilancedataRoutingModule { }
