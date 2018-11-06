import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import {NavbarComponent} from '../shared/navbar/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  providers: [  ]
})
export class LayoutModule { }
