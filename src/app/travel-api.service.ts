import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { travelConfig } from './api-keys'

@Injectable()
export class TravelApiService {


  constructor(
    private http: Http
  ) { }

  getDestinations() {
    return this.http.get(`http://localhost:3000/v1/destinations?api_key=${travelConfig.apiKey}`)
  }

}
