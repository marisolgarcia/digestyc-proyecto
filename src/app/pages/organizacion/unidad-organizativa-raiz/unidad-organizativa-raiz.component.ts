import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-unidad-organizativa-raiz',
  templateUrl: './unidad-organizativa-raiz.component.html',
  styleUrls: ['./unidad-organizativa-raiz.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class UnidadOrganizativaRaizComponent implements OnInit {

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
    this.displayAgregar = true;
  }
  showDialogUnidadSubo() {
    this.displayAgregarSubo = true;
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