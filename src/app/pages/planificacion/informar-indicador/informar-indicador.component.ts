import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-informar-indicador',
  templateUrl: './informar-indicador.component.html',
  styleUrls: ['./informar-indicador.component.css']
})
export class InformarIndicadorComponent implements OnInit {
  indicador: any;
  public indicadores: any[] = [];
  lugar: number;
  tipoJustificacion: any[] = [];
  tipo: string;
  maxFileSize = 10000000;
  contents: any = null;
  filename: string;
  mostrarJustificacion = false;

  meta = 40;
  limite = 30;
  ejecutado = new FormControl('');
  value = 0;
  backgroundColor: any;
  valueLimite = 0;

  constructor(private activateRoute: ActivatedRoute) {
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
      console.log(this.indicador);
    });
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
    this.filename = file.name;
  }

}
