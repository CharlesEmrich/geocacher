import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-geocache',
  templateUrl: './list-geocache.component.html',
  styleUrls: ['./list-geocache.component.css']
})
export class ListGeocacheComponent implements OnInit {
@Input() childGeocacheList: any[];

  constructor() { }

  ngOnInit() {
  }

}
