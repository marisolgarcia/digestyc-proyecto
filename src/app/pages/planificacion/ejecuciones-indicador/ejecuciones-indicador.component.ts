import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-ejecuciones-indicador',
  templateUrl: './ejecuciones-indicador.component.html',
  styleUrls: ['./ejecuciones-indicador.component.css']
})
export class EjecucionesIndicadorComponent implements OnInit {

  indicador: any;
  public indicadores: any[] = [];
  lugar: number;
  ejecucionesTrimestral: any[] = [];
  i: number;
  backgroundColor: any;


  constructor( private activateRoute: ActivatedRoute) {
    this.indicadores = [
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
        periodo: 'Mes 6',
      },
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
        periodo: 'Mes 6',
      },
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
        periodo: 'Mes 6',
      },
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
        periodo: 'Mes 6',
      }
    ];
    this.activateRoute.params.subscribe( params => {
      this.indicador = this.extraerIndicador(params.id);
    });
  }

  ngOnInit(): void {
    this.ejecucionesTrimestral = [
      {
        registrado: '02-04-2020',
        planificadoPara: 'Trimestre 1',
        anio: '2020',
        meta: '40',
        ejecucion: '15',
        evidencia: 'archivo.pdf',
      },
      {
        registrado: '02-07-2020',
        planificadoPara: 'Trimestre 2',
        anio: '2020',
        meta: '30',
        ejecucion: '30',
        evidencia: 'documento.pdf',
      },
      {
        registrado: '02-10-2020',
        planificadoPara: 'Trimestre 3',
        anio: '2020',
        meta: '45',
        ejecucion: '45',
        evidencia: 'entrega.pdf',
      }
    ];
  }

  extraerIndicador(id: number){
    this.lugar = id - 1;
    return this.indicadores[this.lugar];
  }

}
