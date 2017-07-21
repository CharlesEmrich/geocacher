import { Component, OnInit } from '@angular/core';
import { GeocodingService } from './../geocoding.service';

@Component({
  selector: 'app-get-lat-long',
  templateUrl: './get-lat-long.component.html',
  styleUrls: ['./get-lat-long.component.css']
})
export class GetLatLongComponent implements OnInit {
  latitude: string;
  longitude: string;
  address: string;
  addressObj: object;

  constructor(
    private geocodingService: GeocodingService
  ) { }

  ngOnInit() {
  }

  getAddress(userLat: string, userLong: string) {
    this.geocodingService.getAddress(userLat, userLong).subscribe(response => {
      console.log(response.json().results[0]);
      this.addressObj = response.json().results[0];
      this.address = response.json().results[0].formatted_address;
      this.latitude = response.json().results[0].geometry.location.lat;
      this.longitude = response.json().results[0].geometry.location.lng;
    });
  }

}
