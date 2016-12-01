import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'listService',
  templateUrl: 'validation.html'
})
export class listService {

  constructor() {}

    list() {
        let test : number = 150;
        return test;
    }

}
