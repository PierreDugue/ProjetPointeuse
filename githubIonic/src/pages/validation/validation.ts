import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { listService } from './listService';


/*
  Generated class for the Validation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html',
  providers: [{provide: listService, useClass: listService}]
})
export class ValidationPage {

  constructor(public navCtrl: NavController, private listServ: listService) {}

  text: any = {input: 'TEST'};

  onButtonClick(){
    console.log('CLICK CLICK');
  }

  ionViewDidLoad() {
    console.log('Hello ValidationPage Page');
  }

  list(){
    return this.listServ.list();
  }

}
