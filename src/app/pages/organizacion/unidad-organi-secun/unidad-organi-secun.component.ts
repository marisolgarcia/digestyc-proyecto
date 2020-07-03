import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unidad-organi-secun',
  templateUrl: './unidad-organi-secun.component.html',
  styleUrls: ['./unidad-organi-secun.component.css'],
  providers: [ConfirmationService]
})
export class UnidadOrganiSecunComponent implements OnInit {

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
      {nombre: 'Gerente de Finanzas', estado: 'Activo'},
      {nombre: 'Secretaria Administrativa', estado: 'Activo'},
      {nombre: 'Analista Contable', estado: 'Activo'},
    ];
    this.unidadesApoyo = [];
    this.unidadesSubordinadas = [
      {nombre: 'Departamento Financiero', estado: 'Activo'},
      {nombre: 'Departamento Impresiones', estado: 'Activo'},
      {nombre: 'Departamento Almacen', estado: 'Activo'},
      {nombre: 'Departamento Activo Fijo', estado: 'Activo'},
      {nombre: 'Departamento Transporte', estado: 'Activo'},
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
    this.nombreUnidad = 'Gerencia de Administración y Finanzas';
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
