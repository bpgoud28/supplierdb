import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'supplier',
        loadChildren: '../suppliers/suppliers.module#SuppliersModule'
      },
      {
        path: 'createsupplier',
        loadChildren: '../createsupplier/createsupplier.module#CreatesupplierModule'
      },
      {
        path: 'searchsupplier',
        loadChildren: '../searchsupplier/searchsupplier.module#SearchsupplierModule'
      },
      {
        path: 'importcompilancedata',
        loadChildren: '../importcompilancedata/importcompilancedata.module#ImportcompilancedataModule'

      },
      { path: '',
        redirectTo: 'supplier',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
