import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Configuration} from './configuration';
import {SupplierSearchControllerService} from './api/supplierSearchController.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SupplierSearchControllerService],
  bootstrap: [AppComponent]
})
export class AppModule {  public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
  return {
      ngModule: AppModule,
      providers: [ { provide: Configuration, useFactory: configurationFactory } ]
  };
}
constructor( @Optional() @SkipSelf() parentModule: AppModule,
           @Optional() http: HttpClient) {
  if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
  }
  if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
  }
}}

