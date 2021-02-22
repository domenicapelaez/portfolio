import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { ContactoComponent } from './contacto.component';


@NgModule({
  declarations: [ConsultaComponent,
                ContactoComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
