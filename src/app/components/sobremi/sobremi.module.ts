import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobremiRoutingModule } from './sobremi-routing.module';
import { SobremiComponent } from './sobremi.component';


@NgModule({
  declarations: [
                SobremiComponent
  ],
  imports: [
    CommonModule,
    SobremiRoutingModule
  ]
})
export class SobremiModule { }
