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
  addressObj: string;

  constructor(
    private geocodingService: GeocodingService
  ) { }

  ngOnInit() {
  }

  getAddress(userLat: string, userLong: string) {
    this.latitude = userLat;
    this.longitude = userLong;
    this.geocodingService.getAddress(userLat, userLong).subscribe(response => {
      console.log(response.json().results);
      this.addressObj = response.json().results;
    });
  }

}
