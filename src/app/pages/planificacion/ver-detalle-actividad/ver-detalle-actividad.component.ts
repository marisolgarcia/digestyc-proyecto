import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

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
  selector: 'app-ver-detalle-actividad',
  templateUrl: './ver-detalle-actividad.component.html',
  styleUrls: ['./ver-detalle-actividad.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class VerDetalleActividadComponent implements OnInit {

  eliminar: boolean;

  date6: Date = new Date('01/01/2020');
  date1: Date = new Date('06/30/2020');
  act: string = 'Revisión de antecentes de los borradores de anteproyecto de Ley del ISE';
  res: string = 'Un informe de la revisión de los borradores de ley del ISE existente';
  veri: string = 'El informe de revisión de los borrados de ley del ISE existentes';


  es: any;

  iniciativa: iniciativas[];
  selectedIniciativas: string = 'Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE.';

  unidadMedida: unidadMedidas[];
  selectedUM: string = 'Informe' ;

  fuenteFinanciamiento: fuenteFinanciamientos[];
  selectedfuenteFinanciamiento: string = 'Otra';

  unidadOrganizativa: unidadOrganizativas[];
  selectedunidadOrganizativa: string = 'Dirección General';

  cargo: cargos[];
  selectedCargo: string = 'Secretaría General';

  val: number = 2;
  monto: number = 320;

  constructor(private router:Router, private confirmationService: ConfirmationService, private messageService: MessageService) {
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

  confirmEliminar() {
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
        setTimeout(()=>this.router.navigate(['/listaActividades']), 2000 );
    }

}
