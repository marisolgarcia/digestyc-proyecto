import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-unidad-organi-secun',
  templateUrl: './unidad-organi-secun.component.html',
  styleUrls: ['./unidad-organi-secun.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class UnidadOrganiSecunComponent implements OnInit {

  display = false;
  displayUnidad = false;
  displayEditar = false;
  displayAgregar = false;
  estados: any[] = [];
  estado: string;
  cargos: any[] = [];
  unidadesSubordinadas: any[] = [];
  unidadesApoyo: any[] = [];
  nombreUnidad: string;
  nombreCargo: string;
  msgs: Message[] = [];
  nombreCAgregar: string;
  displayAgregarSubo = false;

  constructor(private confirmationService: ConfirmationService, private router: Router,
              private messageService: MessageService) { }

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
    this.displayAgregar = true;
  }
  showDialogUnidadSubo() {
    this.displayAgregarSubo = true;
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
        this.showError();
      }
    });
  }
  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Canceló la Eliminación'});
  }

  showSuccess(mensaje) {
    this.messageService.add({severity: 'success', summary: 'Éxito', detail: mensaje});
    this.displayEditar = false;
    this.display = false;
    this.displayUnidad = false;
    this.displayAgregar = false;
    this.displayAgregarSubo = false;
  }

  agregarPuesto(nombreC) {
    this.cargos.push({nombre: nombreC, estado: 'Activo'});
    this.showSuccess(`Se ha añadido el cargo ${nombreC}`);

  }

  agregarUnidad(nombreU, tipo) {
    if (tipo === 1){
      this.unidadesApoyo.push({nombre: nombreU, estado: 'Activo'});
      this.showSuccess(`Se ha añadido la unidad de Apoyo ${nombreU}`);
    }else if (tipo === 2){
      this.unidadesSubordinadas.push({nombre: nombreU, estado: 'Activo'});
      this.showSuccess(`Se ha añadido la unidad Subordinada ${nombreU}`);
    }
  }

}
