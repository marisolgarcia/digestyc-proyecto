import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-lista-seg-indicadores',
  templateUrl: './lista-seg-indicadores.component.html',
  styleUrls: ['./lista-seg-indicadores.component.css']
})
export class ListaSegIndicadoresComponent implements OnInit {

  public indicadores1: any[] = [];
  public indicadores2: any[] = [];
  public indicadores3: any[] = [];
  public indicadores4: any[] = [];
  items1: MenuItem[];
  display = false;
  tipoTemplate = false;
  perpectivas: any[] = [];
  perpectiva: string;
  periodicidades: any[] = [];
  periodicidad: string;

  constructor() {
  }

  ngOnInit(): void {
  this.indicadores1 = [
      {
        indicador: 'Cumplimientos de tiempos de ejecución del inventario de procesos. ',
        peso: '35%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        indicador: 'Construcción de bases de datos con variables económicas y demográficas actualizadas.',
        peso: '20%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      }
    ];

  this.indicadores2 = [
      {
        indicador: ' Ejecución de Presupuesto Fondo GOES.',
        peso: '40%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        indicador: 'Costeo de operaciones estadísticas.',
        peso: '25%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      }
    ];
  this.items1 = [
      {label: 'Vigentes', icon: 'pi pi-fw pi-calendar'},
      {label: 'Todos', icon: 'pi pi-fw pi-calendar'},
    ];
  this.indicadores3 = [
      {
        indicador: 'Cumplimientos de tiempos de ejecución del inventario de procesos. ',
        peso: '35%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        indicador: 'Ejecución de Presupuesto Fondo de Actividades Especiales (FAE)',
        peso: '25%',
        periodicidad: 'Anual',
        periodo: 'Año 1',
      },
      {
        indicador: 'Construcción de bases de datos con variables económicas y demográficas actualizadas.',
        peso: '20%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      }
    ];
  this.indicadores4 = [
      {
        indicador: ' Ejecución de Presupuesto Fondo GOES.',
        peso: '40%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        indicador: ' Excedente de gasto.',
        peso: '25%',
        periodicidad: 'Anual',
        periodo: 'Año 1',
      },
      {
        indicador: 'Costeo de operaciones estadísticas.',
        peso: '25%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      }
    ];
  this.perpectivas = [
    {label: 'Todas', value: null},
    {label: 'Perpectiva 1', value: {id: 1, name: 'Perpectiva 1'}},
    {label: 'Perpectiva 2', value: {id: 2, name: 'Perpectiva 2'}},
    {label: 'Perpectiva 3', value: {id: 3, name: 'Perpectiva 3'}},
    {label: 'Perpectiva 4', value: {id: 4, name: 'Perpectiva 4'}}
    ];
  this.periodicidades = [
      {label: 'Todas', value: null},
      {label: 'Mensual', value: {id: 1, name: 'Mensual'}},
      {label: 'Trimestral', value: {id: 2, name: 'Trimestral'}},
      {label: 'Sementral', value: {id: 3, name: 'Semestral'}},
      {label: 'Anual', value: {id: 4, name: 'Anual'}}
    ];

  }

  showDialog() {
    this.display = true;
  }

  closeDialog(){
    this.display = false;
  }

  cambio(tipo){
    if (tipo.activeItem.label === 'Vigentes') {
      this.tipoTemplate = false;
    }else {
      this.tipoTemplate = true;
    }

}

}
