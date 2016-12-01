import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Diablo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diablo',
  templateUrl: 'diablo.html'
})
export class DiabloPage {
  userBTag : string = "5150";
  constructor(public navCtrl: NavController) { }

  onButtonClick(value: string) {
    console.log("Battle Tag :  " + value);
    this.userBTag += "Test";
  }
}



