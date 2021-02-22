import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { PhotoshopComponent } from './photoshop/photoshop.component';
import { IonicComponent } from './ionic/ionic.component';


@NgModule({
  declarations: [ServiciosComponent,
                PhotoshopComponent,
                IonicComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
