import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImportcompilancedataRoutingModule} from './importcompilancedata.routing.module';
import {ImportcompilancedataComponent} from './importcompilancedata.component';

@NgModule({
  imports: [
    CommonModule,
    ImportcompilancedataRoutingModule
  ],
  declarations: [
    ImportcompilancedataComponent
  ],
  providers: [
  ]
})
export class ImportcompilancedataModule { }
