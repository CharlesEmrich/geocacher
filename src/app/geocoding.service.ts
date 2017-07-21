import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { geoKey } from './api-keys';

@Injectable()
export class GeocodingService {

  constructor(
    private http: Http
  ) { }

  getAddress(lat: string, long: string): Observable<any> {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${geoKey}&latlng=${lat},${long}`);
  }

  getLatLong(address: string): Observable<any> {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${geoKey}&address=${address}`);
  }
}
