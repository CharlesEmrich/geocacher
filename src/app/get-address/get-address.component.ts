import { Component, OnInit } from '@angular/core';
import { GeocodingService } from './../geocoding.service';

@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.css']
})
export class GetAddressComponent implements OnInit {
  latitude: string;
  longitude: string;
  address: string;
  latLongObj: object;

  constructor(
    private geocodingService: GeocodingService
  ) { }

  ngOnInit() {
  }

  getLatLong(userAddress: string) {
    this.address = userAddress;
    this.geocodingService.getLatLong(userAddress).subscribe(response => {
      console.log(response.json().results[0]);
      this.latLongObj = response.json().results[0];
      this.latitude = response.json().results[0].geometry.location.lat;
      this.longitude = response.json().results[0].geometry.location.lng;
    });
  }
}
