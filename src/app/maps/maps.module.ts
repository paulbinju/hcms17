import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleComponent } from './google/google.component';
// import { AgmCoreModule } from '@agm/core';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [GoogleComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    // }),
    ComponentsModule
  ]
})
export class MapsModule {}
