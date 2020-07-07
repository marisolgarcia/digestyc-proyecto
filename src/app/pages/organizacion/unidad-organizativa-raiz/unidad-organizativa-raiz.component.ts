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
  estado = true;
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
      {nombre: 'Gerente General', estado: true},
      {nombre: 'Asistente de Gerente', estado: false},
      {nombre: 'Planificador', estado: true},
    ];
    this.unidadesApoyo = [
      {nombre: 'Subdireccion General', estado: true},
      {nombre: 'Asesoria de Jefatura', estado: true},
      {nombre: 'Unidad de Planificación y Desarrollo Institucional', estado: false},
    ];
    this.unidadesSubordinadas = [
      {nombre: 'Gerencia de Administración y Finanzas', estado: true },
      {nombre: 'Gerencia de Estadisticas Sociales', estado: false},
      {nombre: 'Gerencia de Estadisticas Economicas', estado: true},
      {nombre: 'Gerencia de Estadisticas de Genero', estado: true},
      {nombre: 'Gerencia de Sistemas', estado: false},
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
      }
    });
  }
  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Canceló la Eliminación'});
  }

  showSuccess(mensaje) {
    this.messageService.add({severity: 'success', summary: 'Guardado', detail: mensaje});
    this.displayEditar = false;
    this.display = false;
    this.displayUnidad = false;
    this.displayAgregar = false;
    this.displayAgregarSubo = false;
  }

  agregarPuesto(nombreC, estadoU) {
    this.cargos.push({nombre: nombreC, estado: estadoU});
    this.showSuccess(`${nombreC} guardado correctamente`);
    this.nombreCAgregar = '';

  }

  agregarUnidad(nombreU, tipo, estadoU) {
    if (tipo === 1){
      this.unidadesApoyo.push({nombre: nombreU, estado: estadoU});
      this.showSuccess(`${nombreU} guardado correctamente`);
    }else if (tipo === 2){
      this.unidadesSubordinadas.push({nombre: nombreU, estado: estadoU});
      this.showSuccess(`${nombreU} guardado correctamente`);
    }
    this.nombreUnidad = '';
  }

}
