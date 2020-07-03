import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink, Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-ver-ejecucion-indicador',
  templateUrl: './ver-ejecucion-indicador.component.html',
  styleUrls: ['./ver-ejecucion-indicador.component.css'],
  providers: [ConfirmationService]
})
export class VerEjecucionIndicadorComponent implements OnInit {
  indicador: any;
  public indicadores: any[] = [];
  lugar: number;
  tipoJustificacion: any[] = [];
  tipo: string;
  valor: number;
  valorKPI: number;
  maxFileSize = 10000000;
  contents: any = null;
  filename: string;
  text: string;
  msgs: Message[] = [];
  position: string;

  meta = 40;
  limite = 30;
  ejecutado = new FormControl('');
  value = 0;
  backgroundColor: any;

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
    });
  }

  ngOnInit(): void {
    this.tipoJustificacion = [
      {label: 'Falta de presupuesto', value: {id: 1, name: 'Falta de presupuesto'}},
      {label: 'Falta de personal', value: {id: 2, name: 'Falta de personal'}},
      {label: 'Actividades fortuitas', value: {id: 3, name: 'Actividades fortuitas'}}
    ];
    this.valor = 0;
    this.valorKPI = 15;
    this.valor = (this.valorKPI / 40) * 100;
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    const interval = setInterval(() => {

      // Calcula el porcentaje con respecto a la meta
      this.value = ((15) * 100) / this.meta;

      // evalua el porcentaje y determina el color
      if (this.value < 50) {
        this.backgroundColor = 'background1';
      } else if (this.value >= 50 && this.value < 100) {
        this.backgroundColor = 'background2';
      } else if (this.value === 100) {
        this.backgroundColor = 'background3';
      } else if (this.value === 0) {
        this.backgroundColor = 'background4';
      }
    }, 2000);
  }
  extraerIndicador(id: number){
    this.lugar = id - 1;
    return this.indicadores[this.lugar];
  }

  progreso(valorkpi){
    this.valor = (valorkpi / 50) * 100;
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
