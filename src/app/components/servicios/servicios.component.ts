import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  nombre: 'servicio';
  datos = [
    {
      titulo: 'Ionic',
      descripcion: 'Aqui va el texto',
      imagen: 'ionic.png'
    },
    {
      titulo: 'Photoshop',
      descripcion: 'Aqui va el texto2',
      imagen: 'ps.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
