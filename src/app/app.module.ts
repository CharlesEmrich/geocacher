import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetAddressComponent } from './get-address/get-address.component';
import { GetLatLongComponent } from './get-lat-long/get-lat-long.component';
import { GeocodingService } from './geocoding.service';

@NgModule({
  declarations: [
    AppComponent,
    GetAddressComponent,
    GetLatLongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GeocodingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
