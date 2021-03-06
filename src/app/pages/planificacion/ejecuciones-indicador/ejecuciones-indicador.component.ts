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
  ejecuciones: any[] = [];
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
        periodo: 'Junio',
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
        periodo: 'Junio',
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
        periodo: 'Junio',
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
        periodo: 'Junio',
      }
    ];
    this.activateRoute.params.subscribe( params => {
      this.indicador = this.extraerIndicador(params.id);
    });
  }

  ngOnInit(): void {
    this.ejecuciones = [
      {
        id: 1,
        registrado: '02-04-2020',
        planificadoPara: 'Trimestre 1',
        anio: '2020',
        meta: '40',
        ejecucion: '15',
        evidencia: 'archivo.pdf',
        idIndicador: 1
      },
      {
        id: 2,
        registrado: '02-02-2020',
        planificadoPara: 'Enero',
        anio: '2020',
        meta: '30',
        ejecucion: '30',
        evidencia: 'documento.pdf',
        idIndicador: 3
      },
      {
        id: 3,
        registrado: '02-03-2020',
        planificadoPara: 'Febrero',
        anio: '2020',
        meta: '45',
        ejecucion: '45',
        evidencia: 'entrega.pdf',
        idIndicador: 3
      },
      {
        id: 4,
        registrado: '02-04-2020',
        planificadoPara: 'Marzo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 3
      },
      {
        id: 5,
        registrado: '02-05-2020',
        planificadoPara: 'Abril',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 3
      },
      {
        id: 6,
        registrado: '02-06-2020',
        planificadoPara: 'Mayo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 3
      },
      {
        id: 7,
        registrado: '02-04-2020',
        planificadoPara: 'Trimestre 1',
        anio: '2020',
        meta: '40',
        ejecucion: '20',
        evidencia: 'archivo.pdf',
        idIndicador: 4
      },
      {
        id: 8,
        registrado: '02-02-2020',
        planificadoPara: 'Enero',
        anio: '2020',
        meta: '30',
        ejecucion: '30',
        evidencia: 'documento.pdf',
        idIndicador: 6
      },
      {
        id: 9,
        registrado: '02-03-2020',
        planificadoPara: 'Febrero',
        anio: '2020',
        meta: '45',
        ejecucion: '45',
        evidencia: 'entrega.pdf',
        idIndicador: 6
      },
      {
        id: 10,
        registrado: '02-04-2020',
        planificadoPara: 'Marzo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 6
      },
      {
        id: 11,
        registrado: '02-05-2020',
        planificadoPara: 'Abril',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 6
      },
      {
        id: 12,
        registrado: '02-06-2020',
        planificadoPara: 'Mayo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 6
      },
      {
        id: 13,
        registrado: '02-04-2020',
        planificadoPara: 'Trimestre 1',
        anio: '2020',
        meta: '40',
        ejecucion: '15',
        evidencia: 'archivo.pdf',
        idIndicador: 7
      },
      {
        id: 14,
        registrado: '02-02-2020',
        planificadoPara: 'Enero',
        anio: '2020',
        meta: '30',
        ejecucion: '30',
        evidencia: 'documento.pdf',
        idIndicador: 10
      },
      {
        id: 15,
        registrado: '02-03-2020',
        planificadoPara: 'Febrero',
        anio: '2020',
        meta: '45',
        ejecucion: '45',
        evidencia: 'entrega.pdf',
        idIndicador: 10
      },
      {
        id: 16,
        registrado: '02-04-2020',
        planificadoPara: 'Marzo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 10
      },
      {
        id: 17,
        registrado: '02-05-2020',
        planificadoPara: 'Abril',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 10
      },
      {
        id: 18,
        registrado: '02-06-2020',
        planificadoPara: 'Mayo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 10
      },
      {
        id: 19,
        registrado: '02-04-2020',
        planificadoPara: 'Trimestre 1',
        anio: '2020',
        meta: '40',
        ejecucion: '15',
        evidencia: 'archivo.pdf',
        idIndicador: 11
      },
      {
        id: 20,
        registrado: '02-02-2020',
        planificadoPara: 'Enero',
        anio: '2020',
        meta: '30',
        ejecucion: '30',
        evidencia: 'documento.pdf',
        idIndicador: 14
      },
      {
        id: 21,
        registrado: '02-03-2020',
        planificadoPara: 'Febrero',
        anio: '2020',
        meta: '45',
        ejecucion: '45',
        evidencia: 'entrega.pdf',
        idIndicador: 14
      },
      {
        id: 22,
        registrado: '02-04-2020',
        planificadoPara: 'Marzo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 14
      },
      {
        id: 23,
        registrado: '02-05-2020',
        planificadoPara: 'Abril',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 14
      },
      {
        id: 24,
        registrado: '02-06-2020',
        planificadoPara: 'Mayo',
        anio: '2020',
        meta: '35',
        ejecucion: '30',
        evidencia: 'entrega.pdf',
        idIndicador: 14
      }
    ];

    this.ejecucionesTrimestral = this.ejecuciones.filter(ejecucion => ejecucion.idIndicador === this.indicador.id);
  }

  extraerIndicador(id: number){
    this.lugar = id - 1;
    return this.indicadores[this.lugar];
  }

}
