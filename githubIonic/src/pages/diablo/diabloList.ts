import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiabloPage } from './diablo';
import { DiabloService } from '../../providers/diablo-service';


/*
  Generated class for the Diablo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'diablo-list',
    template:
    '<p>Infos profile {{model}}</p>' +
    '<ion-item>' +
    '<p>BattelTag : {{model?.battleTag}}</p>' +
    '<p>Paragon level : {{model?.paragonLevel}}</p>' +
    '<ul><li *ngFor="let row of model?.heroes">{{row.name}}</li></ul>' +
    '</ion-item>',
    providers: [{ provide: DiabloPage, useClass: DiabloPage },
        DiabloService]
})
export class diabloList {
    @Input() model;

    constructor(public navCtrl: NavController) {
    }

}
