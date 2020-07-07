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
  selectedPerspectiva: perspectivas;

  unidadLider: unidadLider[];
  selectedUnidadLider: unidadLider;

  cargo: cargos[];
  selectedCargo: string = 'Secretaría General';

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {

    this.perspectiva = [
      {name: '1. Ciudadania Satisfecha con Nuestro Servicio', code: '1'},
      {name: '2. Eficacia de los Procesos Organizacionales', code: '2'},
      {name: '3. Desarrollo y Mordenización Organizacional y del Talento Humano', code: '3'},
      {name: '4. Eficacia en la Movilización y Manejo de los Recursos', code: '4'}
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
