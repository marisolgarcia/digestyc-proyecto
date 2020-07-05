import { Component, OnInit } from '@angular/core';

interface estados {
  name: string;
  code: string;
}

@Component({
  selector: 'app-lista-planes-anuales',
  templateUrl: './lista-planes-anuales.component.html',
  styleUrls: ['./lista-planes-anuales.component.css']
})
export class ListaPlanesAnualesComponent implements OnInit {

  crear: boolean;
  filtrar: boolean;
  editar: boolean;

  estado: estados[];
  selectedEstado: string = 'Vigente';
  nombre: string;

  val: string = "2020";

  constructor() {

    this.estado = [
      {name: 'Vigente', code: '1'},
      {name: 'A programar', code: '2'},
      {name: 'No Vigente', code: '3'}
    ];

  }

  ngOnInit(): void {
  }

  crearDialog() {
    this.crear = true;
  }

  editarDialog() {
    this.editar = true;
  }

  filtrarDialog() {
    this.filtrar = true;
  }

}
