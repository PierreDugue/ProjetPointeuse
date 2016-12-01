import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiabloPage } from './diablo';

/*
  Generated class for the Diablo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'diablo-list',
    template: '<ion-item>' +
    '<p>Test de Model : {{model}}</p>' +
    '</ion-item>',
    providers: [{ provide: DiabloPage, useClass: DiabloPage }]
})
export class diabloList {
    @Input() model;
    constructor(public navCtrl: NavController) { }

}
