import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiabloService } from '../../providers/diablo-service';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the Diablo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diablo',
  templateUrl: 'diablo.html',
  providers: [{ provide: DiabloPage, useClass: DiabloPage },
    DiabloService]
})
export class DiabloPage {
  private userProfile;
  constructor(public navCtrl: NavController,
    private diabloService: DiabloService) {
  }

  onButtonClick(value: String) {
    this.userProfile = this.diabloService.getProfile().catch(err => {
      return Observable.throw(err);
    }).subscribe(response => {
      this.userProfile = response.json();
      console.log(this.userProfile);
    });
  }
}



