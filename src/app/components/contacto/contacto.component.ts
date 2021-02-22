import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  nombre: 'servicio';
  datos = [
    {
      titulo: 'Telefono',
      descripcion: 'Aqui va el texto',
    },
    {
      titulo: 'Email',
      descripcion: 'Aqui va el texto2',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
