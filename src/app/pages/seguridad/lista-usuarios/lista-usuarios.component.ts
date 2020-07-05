import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: any[] = [];
  unidadOrg: any[] = [];
  estado: any[] = [];
  display = false;
  unidad: number;
  cargos: any[] = [];
  cargo: number;

  constructor() { }

  ngOnInit(): void {
    this.usuarios = [
      {
        id: 1,
        nombre: 'Mario Gonzalez',
        unidad: 'Gerencia General',
        cargo: 'Asistente de Gerente',
        correo: 'asiatente@gmail.com',
        estado: 'Activo',
      },
      {
        id: 2,
        nombre: 'Alejandro Martinez',
        unidad: 'Gerencia General',
        cargo: 'Planificador',
        correo: 'plan@gmail.com',
        estado: 'Activo',
      },
      {
        id: 3,
        nombre: 'Carmen Estrada',
        unidad: 'Gerencia General',
        cargo: 'Gerente General',
        correo: 'gerente@gmail.com',
        estado: 'Activo',
      },
      {
        id: 4,
        nombre: 'Luis Campos',
        unidad: 'Gerencia General',
        cargo: 'Planificador',
        correo: 'plan@gmail.com',
        estado: 'Activo',
      },
      {
        id: 5,
        nombre: 'Maria Panameño',
        unidad: 'Gerencia de Administración y Finanzas',
        cargo: 'Gerente de Finanzas',
        correo: 'gerente_finanz@gmail.com',
        estado: 'Activo',
      },
      {
        id: 6,
        nombre: 'Carlos Garcia',
        unidad: 'Gerencia de Administración y Finanzas',
        cargo: 'Analista Contable',
        correo: 'analista_finanz@gmail.com',
        estado: 'Activo',
      },
      {
        id: 7,
        nombre: 'Mariana Chavez',
        unidad: 'Gerencia de Administración y Finanzas',
        cargo: 'Secretaria Administrativa',
        correo: 'secretaria@gmail.com',
        estado: 'Activo',
      },
    ];
    this.estado = [
      {label: 'Activo', value: {id: 1, name: 'Activo'}},
      {label: 'Desactivado', value: {id: 2, name: 'Desactivado'}}
    ];
    this.unidadOrg = [
      {label: 'Gerencia General', value: {id: 1, name: 'Gerencia General'}},
      {label: 'Gerencia de Administración y Finanzas', value: {id: 2, name: 'Gerencia de Administración y Finanzas'}}
    ];
    this.cargos = [
      {label: 'Gerente General', value: {id: 1, nombre: 'Gerente General'}},
      {label: 'Asistente de Gerente', value: {id: 2, nombre: 'Asistente de Gerente'}},
      {label: 'Planificador', value: {id: 3, nombre: 'Planificador'}},
    ];
  }

  showDialog() {
   this.display = true;
  }
  cambioPuestos(unidad) {
    if (unidad === 1){
      this.cargos = [
        {label: 'Gerente General', value: {id: 1, nombre: 'Gerente General'}},
        {label: 'Asistente de Gerente', value: {id: 2, nombre: 'Asistente de Gerente'}},
        {label: 'Planificador', value: {id: 3, nombre: 'Planificador'}},
      ]; }
    else {
      this.cargos = [
        {label: 'Gerente de Finanzas', value: {id: 1, nombre: 'Gerente de Finanzas'}},
        {label: 'Secretaria Administrativa', value: {id: 2, nombre: 'Secretaria Administrativa'}},
        {label: 'Analista Contable', value: {id: 3, nombre: 'Analista Contable'}},
        ];
      }
  }
  closeDialog(){
    this.display = false;
  }
}
