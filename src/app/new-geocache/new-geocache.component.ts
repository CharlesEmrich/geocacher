import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-geocache',
  templateUrl: './new-geocache.component.html',
  styleUrls: ['./new-geocache.component.css']
})
export class NewGeocacheComponent implements OnInit {
  @Output() emittedGeocache = new EventEmitter();
  locType: string = '';

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.locType = value;
  }

  submitGeocache(name: string, lat: string, long: string, address: string) {
    //NOTE: I ran out of time building this system but would be implementing a system whereby we check whether lat/long or address is filled out and issue the correct API call to fill in the other, activating the EventEmitter.emit() in the subscribe() callback
    let geocacheToEmit = {name: name, lat: lat, long: long, address: address};
    this.emittedGeocache.emit(geocacheToEmit);
  }
}
