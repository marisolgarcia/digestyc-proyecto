import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng/api';
import {MenuItem} from 'primeng/api';

interface perspectivas {
  name: string;
  code: string;
}

interface objetivos {
  name: string;
  code: string;
}

interface iniciativas {
  name: string;
  code: string;
}

interface unidadLider {
  name: string;
  code: string;
}

@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.component.html',
  styleUrls: ['./lista-actividades.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ListaActividadesComponent implements OnInit {

  crear: boolean;
  filtrar: boolean;
  eliminar: boolean;
  msgs: Message[] = [];
  date6: Date;
  es: any;

  perspectiva: perspectivas[];
  selectedPerspectiva: perspectivas;

  objetivo: objetivos[];
  selectedObjetivos: objetivos;

  iniciativa: iniciativas[];
  selectedIniciativas: iniciativas;

  unidadLider: unidadLider[];
  selectedUnidadLider: unidadLider;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {

    this.perspectiva = [
      {name: '1. Ciudadania Satisfecha con Nuestro Servicio', code: '1'},
      {name: '2. Eficacia de los Procesos Organizacionales', code: '2'},
      {name: '3. Desarrollo y Mordenización Organizacional y del Talento Humano', code: '3'},
      {name: '4. Eficacia en la Movilización y Manejo de los Recursosno', code: '4'}
    ];

    this.objetivo = [
      {name: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.', code: '1'},
    ];

    this.iniciativa = [
      {name: 'Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE.', code: '1'},
    ];

    this.unidadLider = [
      {name: 'Dirección y Subdirección General', code: '1'},
      {name: 'Unidad de comunicaciones', code: '2'},
      {name: 'Gerencia de Tecnología de la Información', code: '3'}
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

  crearDialog() {
    this.crear = true;
  }

  eliminarDialog() {
    this.eliminar = true;
  }

  filtrarDialog() {
    this.filtrar = true;
  }

  confirm2() {
        this.confirmationService.confirm({
            message: 'Está a punto de eliminar la actividad' +
            ' "Revisión de antecentes de los borradores de anteproyecto de Ley del ISE"'+
            ' Que tiene por unidad responsable a Secretaria General',
            header: '¿Eliminar?',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.showSuccess();
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
    showSuccess() {
        this.messageService.add({key: 'tr', severity:'success', summary: 'Mensaje de Exito', detail:'La actividad seleccionada a sido eliminada exitosamente'});
    }

}
