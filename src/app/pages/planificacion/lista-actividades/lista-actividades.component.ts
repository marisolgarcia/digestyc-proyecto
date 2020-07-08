import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';

interface perspectivas {
  name: string;
  code: string;
}

interface cargos {
  name: string;
  code: string;
}

interface unidadLider {
  name: string;
  code: string;
}

interface actividad {
  code: number;
  actividad: string;
  responsable: string;
  fInicio: string;
  fFin: string;
  co: number;
  ci: number;
  cp: number;
}

@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.component.html',
  styleUrls: ['./lista-actividades.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ListaActividadesComponent implements OnInit {

  filtrar: boolean;
  date6: Date;
  date: Date;
  es: any;

  perspectiva: perspectivas[];
  actividades: actividad[];
  selectedPerspectiva: perspectivas;

  unidadLider: unidadLider[];
  selectedUnidadLider: unidadLider;

  cargo: cargos[];
  selectedCargo: string = 'Secretaría General';

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {

    this.perspectiva = [
      {name: 'Ciudadania Satisfecha con Nuestro Servicio', code: '1'},
      {name: 'Eficacia de los Procesos Organizacionales', code: '2'},
      {name: 'Desarrollo y Mordenización Organizacional y del Talento Humano', code: '3'},
      {name: 'Eficacia en la Movilización y Manejo de los Recursos', code: '4'}
    ];

    this.unidadLider = [
      {name: 'Dirección y Subdirección General', code: '1'},
      {name: 'Unidad de comunicaciones', code: '2'},
      {name: 'Gerencia de Tecnología de la Información', code: '3'}
    ];

    this.cargo = [
      {name: 'Director General', code: '1'},
      {name: 'Sub-Director', code: '2'},
      {name: 'Secretaría General', code: '3'},
    ];
    this.actividades = [
      {
        actividad: 'Revisión de antecentes de los borradores de  anteproyecto de  Ley del ISE.',
        code: 1,
        co: 1,
        ci: 1,
        responsable: 'Secretaría General',
        cp: 1,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Realizar un análisis del estado actual de la cartografía para la producción estadística.',
        code: 1,
        co: 1,
        ci: 2,
        responsable: 'Gerencia de Gestión y Análisis Estadístico',
        cp: 1,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Realizar un análisis del estado actual  de la actualización y aplicación de los clasificadores para la producción estadística.',
        code: 2,
        co: 2,
        ci: 2,
        responsable: 'Gerencia de Gestión y Análisis Estadístico',
        cp: 1,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Elaborar un plan de reactivación de las estadísticas culturales.',
        code: 1,
        co: 1,
        ci: 2,
        responsable: 'Gerencia de Estadísticas Sociodemográficas',
        cp: 2,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Realizar un inventario de Hardware y software disponible en la institución.',
        code: 1,
        co: 4,
        ci: 3,
        responsable: 'Gerencia de Tecnologías de la Información',
        cp: 3,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Formular el plan de actualización e innovación tecnológica.',
        code: 2,
        co: 4,
        ci: 3,
        responsable: 'Gerencia de Tecnologías de la Información',
        cp: 3,
        fInicio: '01/01/2020',
        fFin: '30/06/2020'
      },
      {
        actividad: 'Elaborar un inventario de productos estadisticos.',
        code: 2,
        co: 1,
        ci: 5,
        responsable: 'Unidad de Planificación',
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

  confirm2() {
        this.confirmationService.confirm({
            message: 'Está a punto de eliminar la actividad' +
            ' "Revisión de antecentes de los borradores de anteproyecto de Ley del ISE"',
            header: '¿Desea Eliminar la actividad?',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.showSuccess();
            }
        });
    }
    showSuccess() {
        this.messageService.add({severity:'success', summary: 'Eliminado', detail:'Actividad eliminada correctamente'});
    }

}
