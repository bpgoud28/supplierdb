import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreatesupplierRoutingModule} from './createsupplier.routing.module';
import {CreatesupplierComponent} from './createsupplier.component';

@NgModule({
  imports: [
    CommonModule,
    CreatesupplierRoutingModule
  ],
  declarations: [
    CreatesupplierComponent
  ],
  providers: [
  ]
})
export class CreatesupplierModule { }
