import { Component, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TravelApiService } from '../travel-api.service'
declare var jQuery:any;

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
  destinationDetail;

  constructor(
    private travelApi: TravelApiService
  ) { }

  ngOnInit() {
  }

  getApiDestinations() {
    this.travelApi.getDestinations().subscribe(response => {
      this.destinations = response.json();
    });
  }

  getDestinationDetail(i) {
    this.destinationDetail = this.destinations[i];
    jQuery('#destination-detail').html(
      `<h2>${this.destinationDetail.name}</h2>`+
      `<p>${this.destinationDetail.city}</p>`+
      `<p>${this.destinationDetail.locale}</p>`+
      `<p>${this.destinationDetail.country}</p>`
    );
  }
  deleteDestination(id, i) {
    let message;
    this.travelApi.deleteDestination(id).subscribe(response => {
      message = response.json()['message'];
      jQuery('#destination-detail').html(
        `<p>${message}</p>`
      );
      jQuery(`#destination${i}`).remove();
    });
  }

}
