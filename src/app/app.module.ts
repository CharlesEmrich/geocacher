import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetAddressComponent } from './get-address/get-address.component';
import { GetLatLongComponent } from './get-lat-long/get-lat-long.component';
import { GeocodingService } from './geocoding.service';
import { NewGeocacheComponent } from './new-geocache/new-geocache.component';
import { ListGeocacheComponent } from './list-geocache/list-geocache.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAddressComponent,
    GetLatLongComponent,
    NewGeocacheComponent,
    ListGeocacheComponent
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
