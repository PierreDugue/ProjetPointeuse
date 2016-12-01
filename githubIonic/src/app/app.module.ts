import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ValidationPage } from '../pages/validation/validation';
import { listService } from '../pages/validation/listService';
import { DiabloPage } from '../pages/diablo/diablo';
import { diabloList } from '../pages/diablo/diabloList';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ValidationPage,
    listService,
    DiabloPage,
    diabloList
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ValidationPage,
    listService,
    DiabloPage,
    diabloList
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
