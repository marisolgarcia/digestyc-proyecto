import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';

interface fechasCierre {
  name: string;
  fechaInicio: string;
  fechaFin: string;
}

@Component({
  selector: 'app-cierre',
  templateUrl: './cierre.component.html',
  styleUrls: ['./cierre.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CierreComponent implements OnInit {

  avisoDias: number = 0;
  notificacionDias: number = 1;
  editar: boolean;

  date6: Date = new Date('07/02/2020');
  date: Date = new Date('07/08/2020');
  mes: string = 'Junio';

  aviso: number = 0;
  noti: number = 1;

  msjaviso: string = 'Es un gusto saludarle y a la vez enviar este comunicado para informarle que ya puede realizar el ingreso de información en SAI relacionada a la ejecución del Plan de Trabajo de las Unidades Organizativas, correspondiente al mes del informe en curso. Al hacerle este recordatorio, hacemos también de su conocimiento que cuenta con 5 días hábiles para realiza el ingreso de avance y que una vez concluido el plazo de la presentación del informe por parte de las Unidades Organizativas, SAI inicia el proceso de análisis de la información mensual y cualquier información que se ingrese a SAI no sera incluida en el informe del mes correspondiente. Este recordatorio se realiza sobre la base en cumplimiento de la Normativa de Control Interno del MINEC, segundo inciso deñ Artículo 27 que señala que los Directores Generales y Jefes, informarán a la gerencia de Planificación y a la Gerencia Financiera el avance mensual, a mas tardar en los primeros cinco días hábiles de cada mes; con el objeto de cumplir con los plazos establecidos en la ley de Administración Financiera Institucional (AFI) y su Reglamento para presentar el informe Institucional a la Dirección General de Presupuesto del Ministerio de Hacienda';

  msjnoti: string = 'Es un gusto saludarle y a la vez enviar este comunicado para recordarle que el día de mañana SAI cierra la opcion de guardado de información relacionada a la ejecución del Plan de Trabajo de las Unidades Organizativas, correspondiente al mes del informe en curso.'
  + ' ' + 'Al hacerle este recordatorio, hacemos también de su conocimiento que una vez concluido el plazo de la presentación del informe por parte de las Unidades Organizativas, SAI inicia el proceso de análisis de la información mensual y cualquier información que se ingrese a SAI no sera incluida en el informe del mes correspondiente'
  + ' ' + 'Este recordatorio se realiza sobre la base en cumplimiento de la Normativa de Control Interno del MINEC, segundo inciso deñ Artículo 27 que señala que los Directores Generales y Jefes, informarán a la gerencia de Planificación y a la Gerencia Financiera el avance mensual, a mas tardar en los primeros cinco días hábiles de cada mes; con el objeto de cumplir con los plazoz establecidos en la ley de Administración Financiera Institucional (AFI) y su Reglamento para presentar el informe Institucional a la Dirección General de Presupuesto del Ministerio de Hacienda';


  es: any;

  cierre: fechasCierre[];

  cols: any[];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {

    this.cierre = [
      {name: 'Enero', fechaInicio: '02/02/2020', fechaFin: '08/02/2020'},
      {name: 'Febrero', fechaInicio: '02/03/2020', fechaFin: '08/03/2020'},
      {name: 'Marzo', fechaInicio: '02/04/2020', fechaFin: '08/04/2020'},
      {name: 'Abril', fechaInicio: '02/05/2020', fechaFin: '08/05/2020'},
      {name: 'Mayo', fechaInicio: '02/06/2020', fechaFin: '08/06/2020'},
      {name: 'Junio', fechaInicio: '02/07/2020', fechaFin: '08/07/2020'},
      {name: 'Julio', fechaInicio: '02/08/2020', fechaFin: '08/08/2020'},
      {name: 'Agosto', fechaInicio: '02/09/2020', fechaFin: '08/09/2020'},
      {name: 'Septiembre', fechaInicio: '02/10/2020', fechaFin: '08/10/2020'},
      {name: 'Octubre', fechaInicio: '02/11/2020', fechaFin: '08/11/2020'},
      {name: 'Noviembre', fechaInicio: '02/12/2020', fechaFin: '08/12/2020'},
      {name: 'Diciembre', fechaInicio: '02/01/2021', fechaFin: '08/01/2021'},

    ];

      this.cols = [
          { field: 'name', header: 'Mes' },
          { field: 'fechaInicio', header: 'Inicio de Cierre' },
          { field: 'fechaFin', header: 'Fin de Cierre' },
          { field: '', header: 'Editar' }
      ];

      this.es = {
          	firstDayOfWeek: 1,
          	dayNames: [ "Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado" ],
          	dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
          	dayNamesMin: [ "D","L","M","X","J","V","S" ],
              monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
          	monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
              today: 'Hoy',
              clear: 'Borrar'
          };
          let today = new Date();
          let month = today.getMonth();
          let year = today.getFullYear();
          let prevMonth = (month === 0) ? 11 : month -1;
          let prevYear = (prevMonth === 11) ? year - 1 : year;
          let nextMonth = (month === 11) ? 0 : month + 1;
          let nextYear = (nextMonth === 0) ? year + 1 : year;
  }

  editarDialog() {
    this.editar = true;
  }
  showSuccess() {
    this.editar = false;
    this.messageService.add({severity:'success', summary: 'Guardado', detail:'Cierre guardado correctamente'});
  }

}
