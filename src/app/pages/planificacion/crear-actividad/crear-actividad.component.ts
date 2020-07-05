import { Component, OnInit } from '@angular/core';

interface iniciativas {
  name: string;
  code: string;
}

interface unidadMedidas {
  name: string;
  code: string;
}
interface fuenteFinanciamientos {
  name: string;
  code: string;
}

interface unidadOrganizativas {
  name: string;
  code: string;
}

interface cargos {
  name: string;
  code: string;
}

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  date6: Date;
  es: any;

  iniciativa: iniciativas[];
  selectedIniciativas: iniciativas;

  unidadMedida: unidadMedidas[];
  selectedUM: unidadMedidas;

  fuenteFinanciamiento: fuenteFinanciamientos[];
  selectedfuenteFinanciamiento: fuenteFinanciamientos;

  unidadOrganizativa: unidadOrganizativas[];
  selectedunidadOrganizativa: unidadOrganizativas;

  cargo: cargos[];
  selectedCargo: cargos;

  val: number;

  constructor() {
    this.iniciativa = [
      {name: 'Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE.', code: '1'},
    ];

    this.unidadMedida = [
      {name: 'Informe', code: '1'},
      {name: 'Base de Datos', code: '2'},
      {name: 'Documento', code: '3'},
    ];

    this.fuenteFinanciamiento = [
      {name: 'Interna', code: '1'},
      {name: 'Externa', code: '2'},
      {name: 'Otra', code: '3'},
    ];

    this.unidadOrganizativa = [
      {name: 'Dirección General', code: '1'},
    ];

    this.cargo = [
      {name: 'Direcctor General', code: '1'},
      {name: 'Sub-Director', code: '2'},
      {name: 'Secretaria de Dirección', code: '3'},
    ];
  }

  ngOnInit(): void {
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

}
