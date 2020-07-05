import { Component, OnInit } from '@angular/core';

interface fechasCierre {
  fechaRegistro: string;
  mesPlanificado: string;
  meta: number;
  ejecucion: number;
  acumulado: number;
  evidencia: string;
}

@Component({
  selector: 'app-ejecuciones-act-seg',
  templateUrl: './ejecuciones-act-seg.component.html',
  styleUrls: ['./ejecuciones-act-seg.component.css']
})
export class EjecucionesActSegComponent implements OnInit {

  cierre: fechasCierre[];

  constructor() { }

  ngOnInit() {

    this.cierre = [
      {fechaRegistro: '02/02/2020', mesPlanificado: 'Enero', meta: 60, ejecucion: 60, acumulado: 60, evidencia: 'archivo.pdf'},
      {fechaRegistro: '02/02/2020', mesPlanificado: 'Febrero', meta: 70, ejecucion: 10, acumulado: 10, evidencia: 'documento.xlsx'},
      {fechaRegistro: '05/03/2020', mesPlanificado: 'Febrero', meta: 70, ejecucion: 60, acumulado: 70, evidencia: 'entrega.docx'},
      {fechaRegistro: '05/06/2020', mesPlanificado: 'Mayo', meta: 35, ejecucion: 35, acumulado: 35, evidencia: 'archivo.pdf'},
      {fechaRegistro: '05/06/2020', mesPlanificado: 'Junio', meta: 60, ejecucion: 30, acumulado: 30, evidencia: 'archivo.pdf'},
    ];
  }

  

}
