import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  estado: any[] = [];
  unidadOrg: any[] = [];
  cargos: any[] = [];
  roles: any[] = [];
  rolesSeleccionados: any[] = [];
  unidad: number;
  cargo: number;
  usuarios: any[] = [];
  nombre: string;
  apellido: string;
  correo: string;
  usuario: any;
  lugar: number;
  activo = true;

  disabled = true;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
    this.roles = [
      {nombre: 'Jefe de Unidad'},
    ];
    this.rolesSeleccionados = [
      {nombre: 'Jefe de Planificación'},
    ];
    this.usuarios = [
      {
        id: 1,
        nombre: 'Mario',
        apellido: 'Gonzalez',
        unidad: 'Gerencia General',
        cargo: 'Asistente de Gerente',
        correo: 'asiatente@gmail.com',
        estado: 'Activo',
      },
      {
        id: 2,
        nombre: 'Alejandro',
        apellido: 'Martinez',
        unidad: 'Gerencia General',
        cargo: 'Planificador',
        correo: 'plan@gmail.com',
        estado: 'Activo',
      },
      {
        id: 3,
        nombre: 'Carmen',
        apellido: 'Estrada',
        unidad: 'Gerencia General',
        cargo: 'Gerente General',
        correo: 'gerente@gmail.com',
        estado: 'Activo',
      },
      {
        id: 4,
        nombre: 'Luis',
        apellido: 'Campos',
        unidad: 'Gerencia General',
        cargo: 'Planificador',
        correo: 'plan@gmail.com',
        estado: 'Activo',
      },
      {
        id: 5,
        nombre: 'Maria',
        apellido: 'Garcia',
        unidad: 'Gerencia de Administración y Finanzas',
        cargo: 'Gerente de Finanzas',
        correo: 'gerente_finanz@gmail.com',
        estado: 'Activo',
      },
      {
        id: 6,
        nombre: 'Carlos',
        apellido: 'Garcia',
        unidad: 'Gerencia de Administración y Finanzas',
        cargo: 'Analista Contable',
        correo: 'analista_finanz@gmail.com',
        estado: 'Activo',
      },
      {
        id: 7,
        nombre: 'Mariana',
        apellido: 'Chavez',
        unidad: 'Gerencia de Administración y Finanzas',
        cargo: 'Secretaria Administrativa',
        correo: 'secretaria@gmail.com',
        estado: 'Activo',
      },
    ];
    this.activateRoute.params.subscribe( params => {
      this.usuario = this.extraerIndicador(params.id);
    });
    this.nombre = this.usuario.nombre;
    this.apellido = this.usuario.apellido;
    this.correo = this.usuario.correo;
  }

  extraerIndicador(id: number){
    this.lugar = id - 1;
    return this.usuarios[this.lugar];
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


}
