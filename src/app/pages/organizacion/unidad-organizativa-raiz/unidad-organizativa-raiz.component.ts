import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unidad-organizativa-raiz',
  templateUrl: './unidad-organizativa-raiz.component.html',
  styleUrls: ['./unidad-organizativa-raiz.component.css'],
  providers: [ConfirmationService]
})
export class UnidadOrganizativaRaizComponent implements OnInit {

  display = false;
  displayUnidad = false;
  displayEditar = false;
  estados: any[] = [];
  estado: string;
  cargos: any[] = [];
  unidadesSubordinadas: any[] = [];
  unidadesApoyo: any[] = [];
  nombreUnidad: string;
  nombreCargo: string;
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit(): void {
    this.cargos = [
      {nombre: 'Gerente General', estado: 'Activo'},
      {nombre: 'Asistente de Gerente', estado: 'Activo'},
      {nombre: 'Planificador', estado: 'Activo'},
    ];
    this.unidadesApoyo = [
      {nombre: 'Subdireccion General', estado: 'Activo'},
      {nombre: 'Asesoria de Jefatura', estado: 'Activo'},
      {nombre: 'Unidad de Planificación y Desarrollo Institucional', estado: 'Activo'},
    ];
    this.unidadesSubordinadas = [
      {nombre: 'Gerencia de Administración y Finanzas', estado: 'Activo'},
      {nombre: 'Gerencia de Estadisticas Sociales', estado: 'Activo'},
      {nombre: 'Gerencia de Estadisticas Economicas', estado: 'Activo'},
      {nombre: 'Gerencia de Estadisticas de Genero', estado: 'Activo'},
      {nombre: 'Gerencia de Sistemas', estado: 'Activo'},
    ];
    this.estados = [
      {label: 'Activo', value: {id: 1, name: 'Activo'}},
      {label: 'Desactivado', value: {id: 2, name: 'Desactivado'}}
    ];
  }

  showDialog() {
    this.display = true;
  }
  showDialogUnidad() {
    this.displayUnidad = true;
  }
  showDialogUnidadEditar() {
    this.nombreUnidad = 'Gerencia General';
    this.displayUnidad = true;
  }
  showDialogEditar(nombre) {
    this.displayEditar = true;
    this.nombreCargo = nombre;
  }
  closeDialog(){
    this.display = false;
  }

  confirm2() {
    this.confirmationService.confirm({
      message: '¿Desea eliminar la unidad Organizativa?',
      header: 'Confirmación de Eliminación',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Si',
      accept: () => {
        this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Record deleted'}];
        this.router.navigateByUrl('/unidadesVacias');
      },
      reject: () => {
        this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

}
