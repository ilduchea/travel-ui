import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TravelApiService } from '../travel-api.service'

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
  providers: [
    TravelApiService
  ]
})
export class DestinationListComponent implements OnInit {
  destinations;

  constructor(private travelApi: TravelApiService) { }

  ngOnInit() {
  }

  getApiDestinations() {
    this.travelApi.getDestinations().subscribe(response => {
      this.destinations = response.json();
    });
  }

  getDestinationDetail(id) {
    console.log('id: ', id);
  }

}
