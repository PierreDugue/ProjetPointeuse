import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

/*
  Generated class for the DiabloService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

const LANGAGE = "local=en_GB";
const API_KEY = "apikey=n75p34uvzps72cy3ajsfchpxfmngr6n9";

@Injectable()
export class DiabloService {
  //private blizzardApiURL = 'https://eu.api.battle.net/d3/profile/piloubegood%232987/?locale=en_GB&apikey=n75p34uvzps72cy3ajsfchpxfmngr6n9';
  private blizzardApiBaseURL = 'https://eu.api.battle.net/d3/profile/';
  private fullURL;
  constructor(public http: Http) {
  };

  getProfile(userId: String) {
    this.fullURL = this.blizzardApiBaseURL + userId + "/?" +
      LANGAGE + "&" + API_KEY;
    try {
      return this.http.get(this.fullURL);
    }
    catch (e) {
      if (e instanceof RangeError) {
        console.log('Out of range');
      }
    }
  }
}
