import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        id: 1,
        indicador: 'Cumplimientos de tiempos de ejecución del inventario de procesos. ',
        peso: '35%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        id: 2,
        indicador: 'Construcción de bases de datos con variables económicas y demográficas actualizadas.',
        peso: '20%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      },
      {
        id: 3,
        indicador: 'Personal especializado, es decir, con al menos un diploma de aprobación nacional o internacional relacionada con el cargo que desempeña, por parte de Instituciones acreditadas.',
        peso: '20%',
        periodicidad: 'Mensual',
        periodo: 'Junio',
      }
    ];

  this.indicadores2 = [
      {
        id: 4,
        indicador: ' Ejecución de Presupuesto Fondo GOES.',
        peso: '40%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        id: 5,
        indicador: 'Costeo de operaciones estadísticas.',
        peso: '25%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      },
      {
        id: 6,
        indicador: 'Presentación de la iniciativa  de la ley de creación del  Instituto Salvadoreño de Estadística (ISE).',
        peso: '20%',
        periodicidad: 'Mensual',
        periodo: 'Junio',
      }
    ];
  this.items1 = [
      {label: 'Vigentes', icon: 'pi pi-fw pi-calendar'},
      {label: 'Todos', icon: 'pi pi-fw pi-calendar'},
    ];
  this.indicadores3 = [
      {
        id: 7,
        indicador: 'Cumplimientos de tiempos de ejecución del inventario de procesos. ',
        peso: '35%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        id: 8,
        indicador: 'Ejecución de Presupuesto Fondo de Actividades Especiales (FAE)',
        peso: '25%',
        periodicidad: 'Anual',
        periodo: 'Año 1',
      },
      {
        id: 9,
        indicador: 'Construcción de bases de datos con variables económicas y demográficas actualizadas.',
        peso: '20%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      },
      {
        id: 10,
        indicador: 'Personal especializado, es decir, con al menos un diploma de aprobación nacional o internacional relacionada con el cargo que desempeña, por parte de Instituciones acreditadas.',
        peso: '20%',
        periodicidad: 'Mensual',
        periodo: 'Junio',
      }
    ];
  this.indicadores4 = [
      {
        id: 11,
        indicador: ' Ejecución de Presupuesto Fondo GOES.',
        peso: '40%',
        periodicidad: 'Trimestral',
        periodo: 'Trimestre 2',
      },
      {
        id: 12,
        indicador: ' Excedente de gasto.',
        peso: '25%',
        periodicidad: 'Anual',
        periodo: 'Año 1',
      },
      {
        id: 13,
        indicador: 'Costeo de operaciones estadísticas.',
        peso: '25%',
        periodicidad: 'Semestral',
        periodo: 'semestre 1',
      },
      {
        id: 14,
        indicador: 'Presentación de la iniciativa  de la ley de creación del  Instituto Salvadoreño de Estadística (ISE).',
        peso: '20%',
        periodicidad: 'Mensual',
        periodo: 'Junio',
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
