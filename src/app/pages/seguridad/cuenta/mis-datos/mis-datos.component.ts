import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  usuario = {
    id: 3,
    nombre: 'Carmen Estrada',
    unidad: 'Gerencia General',
    cargo: 'Gerente General',
    correo: 'gerente@gmail.com',
    estado: 'Activo',
  }

	constructor() { }

	ngOnInit(): void {
	}

}
