import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent implements OnInit {
  @Input() listDestination;
  destination;

  constructor() { }

  ngOnInit() {
    this.destination = this.listDestination;
    console.log('detail side: ');
  }

}
