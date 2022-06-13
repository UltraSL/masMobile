import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPageRoutingModule } from './request-routing.module';

import { RequestPage } from './request.page';
import { AgmCoreModule } from '@agm/core';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmDirectionModule} from 'agm-direction';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPageRoutingModule,
    AgmDirectionModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAiOuKxmO0fR-azjwFPGiff04CtB15WIWQ',
      libraries: ['places','drawing','geometry']
    }),
  ],
  declarations: [RequestPage]
})
export class RequestPageModule {}
