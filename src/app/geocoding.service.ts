import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { geoKey } from './api-keys';

@Injectable()
export class GeocodingService {

  constructor(
    private http: Http
  ) { }

  getAddress(lat: string, long: string) {

  }

  getLatLong(address: string) {
    
  }
}
