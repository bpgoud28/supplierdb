import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {SuppliersComponent} from './suppliers.component';
import {SuppliersRoutingModule} from './suppliers.routing.module';

@NgModule({
  declarations: [
    SuppliersComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  providers: [  ]
})
export class SuppliersModule { }
