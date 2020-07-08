import { Component, OnInit } from '@angular/core';

interface perspectivas {
  name: string;
  code: string;
}

interface actividad {
  code: number;
  actividad: string;
  fInicio: string;
  fFin: string;
  co: number;
  ci: number;
  cp: number;
}

@Component({
  selector: 'app-lista-actividad-seg-todas',
  templateUrl: './lista-actividad-seg-todas.component.html',
  styleUrls: ['./lista-actividad-seg-todas.component.css']
})
export class ListaActividadSegTodasComponent implements OnInit {

  filtrar: boolean;
  date6: Date;
  date1: Date;
  es: any;

  perspectiva: perspectivas[];
  actividades: actividad[];
  selectedPerspectiva: perspectivas;

  constructor() {
    this.perspectiva = [
      {name: 'Ciudadania Satisfecha con Nuestro Servicio', code: '1'},
      {name: 'Eficacia de los Procesos Organizacionales', code: '2'},
      {name: 'Desarrollo y Mordenización Organizacional y del Talento Humano', code: '3'},
      {name: 'Eficacia en la Movilización y Manejo de los Recursosno', code: '4'}
    ];
    this.actividades = [
      {
        actividad: 'Materiales informativos sobre hechos de violencia contra la mujer y brechas de género.',
        code: 1,
        co: 1,
        ci: 1,
        cp: 1,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Revisar, actualizar y adaptar los clasificadores: Clasificación de Actividades Económicas de El Salvador (CLAEES), Clasificación de Productos de El Salvador (CPES) y  Clasificación del Consumo Individual por Finalidades de El Salvador (CCIFES), para su implementación en la producción estadística.',
        code: 1,
        co: 1,
        ci: 2,
        cp: 2,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Cálculo y publicación del Índice de Precios al Consumidor (IPC).',
        code: 1,
        co: 1,
        ci: 2,
        cp: 1,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Realizar un inventario de Hardware y software disponible en la institución.',
        code: 1,
        co: 4,
        ci: 3,
        cp: 3,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Elaborar un inventario de productos estadisticos.',
        code: 2,
        co: 1,
        ci: 5,
        cp: 4,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
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

  filtrarDialog() {
    this.filtrar = true;
  }

}
