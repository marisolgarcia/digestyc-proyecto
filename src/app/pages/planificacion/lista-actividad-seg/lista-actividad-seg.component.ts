import { Component, OnInit } from '@angular/core';

interface perspectivas {
  name: string;
  code: string;
}

@Component({
  selector: 'app-lista-actividad-seg',
  templateUrl: './lista-actividad-seg.component.html',
  styleUrls: ['./lista-actividad-seg.component.css']
})
export class ListaActividadSegComponent implements OnInit {

  filtrar: boolean;

  perspectiva: perspectivas[];
  selectedPerspectiva: perspectivas;

  constructor() {
    this.perspectiva = [
      {name: '1. Ciudadania Satisfecha con Nuestro Servicio', code: '1'},
      {name: '2. Eficacia de los Procesos Organizacionales', code: '2'},
      {name: '3. Desarrollo y Mordenización Organizacional y del Talento Humano', code: '3'},
      {name: '4. Eficacia en la Movilización y Manejo de los Recursosno', code: '4'}
    ];
  }

  ngOnInit(): void {
  }

  filtrarDialog() {
    this.filtrar = true;
  }


}
