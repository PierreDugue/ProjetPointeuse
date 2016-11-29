import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Validation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})
export class ValidationPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ValidationPage Page');
  }

}
