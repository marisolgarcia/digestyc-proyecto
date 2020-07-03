import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-editar-ejecucion-indicador',
  templateUrl: './editar-ejecucion-indicador.component.html',
  styleUrls: ['./editar-ejecucion-indicador.component.css'],
  providers: [ConfirmationService]
})
export class EditarEjecucionIndicadorComponent implements OnInit {
  indicador: any;
  public indicadores: any[] = [];
  lugar: number;
  tipoJustificacion: any[] = [];
  tipo: string;
  maxFileSize = 10000000;
  contents: any = null;
  filename: string;
  mostrarJustificacion = false;
  msgs: Message[] = [];

  meta = 40;
  limite = 30;
  ejecutado = new FormControl('15');
  value = 0;
  backgroundColor: any;
  valueLimite = 0;
  mostrarArchivo = true;
  justificacion: string;

  constructor(private activateRoute: ActivatedRoute, private confirmationService: ConfirmationService,
              private router: Router) {
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
      console.log(this.indicador);
    });
    this.justificacion = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  }

  ngOnInit(): void {
    this.tipoJustificacion = [
      {label: 'Falta de presupuesto', value: {id: 1, name: 'Falta de presupuesto'}},
      {label: 'Falta de personal', value: {id: 2, name: 'Falta de personal'}},
      {label: 'Actividades fortuitas', value: {id: 3, name: 'Actividades fortuitas'}}
    ];

    const interval = setInterval(() => {

      // Calcula el porcentaje con respecto a la meta
      this.value = ((this.ejecutado.value) * 100) / this.meta;

      // evalua el porcentaje y determina el color
      if (this.value < 50) {
        this.backgroundColor = 'background1';
        this.mostrarJustificacion = true;
      } else if (this.value >= 50 && this.value < 100) {
        this.backgroundColor = 'background2';
        this.mostrarJustificacion = true;
      } else if (this.value >= 100) {
        this.backgroundColor = 'background3';
        this.mostrarJustificacion = false;
      } else if (this.value === 0) {
        this.backgroundColor = 'background4';
      }

      if (this.ejecutado.value < this.limite) {
        this.mostrarJustificacion = true;
      } else {
        this.mostrarJustificacion = false;
      }
    }, 2000);
  }

  extraerIndicador(id: number){
    this.lugar = id - 1;
    return this.indicadores[this.lugar];
  }

  public myUploader(event, form) {
    console.log('Reading file...');
    for (const file of event.files) {
      const dataset = this.readFile(file);
      console.log('onUpload: ', dataset);
    }
    form.clear();
  }

  private readFile(file: File) {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.contents = reader.result;
    };
    reader.readAsText(file);
    this.mostrarArchivo = false;
    this.filename = file.name;
  }

  confirm2() {
    this.confirmationService.confirm({
      message: '¿Desea eliminar el informe del indicador?',
      header: 'Confirmación de Eliminación',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Si',
      accept: () => {
        this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Record deleted'}];
        this.router.navigateByUrl(`ejecucionesIndicador/${this.indicador.id}`);
      },
      reject: () => {
        this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

}
