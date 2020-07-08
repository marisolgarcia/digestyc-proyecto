import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng/api';

interface perspectivas {
  name: string;
  code: number;
}

interface objetivos {
  name: string;
  code: number;
}

interface iniciativas {
  code: number;
  name: string;
  objetivo: string;
  lider: string;
  co: number;
  cl: number;
  cp: number;
}

interface unidadLider {
  name: string;
  code: number;
}

@Component({
  selector: 'app-iniciativas-plan-anual',
  templateUrl: './iniciativas-plan-anual.component.html',
  styleUrls: ['./iniciativas-plan-anual.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class IniciativasPlanAnualComponent implements OnInit {

  crear: boolean;
  filtrar: boolean;
  eliminar: boolean;
  msgs: Message[] = [];

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
      {name: 'Ciudadania Satisfecha con Nuestro Servicio', code: 1},
      {name: '2. Eficacia de los Procesos Organizacionales', code: 2},
      {name: '3. Desarrollo y Mordenización Organizacional y del Talento Humano', code: 3},
      {name: '4. Eficacia en la Movilización y Manejo de los Recursosno', code: 4}
    ];

    this.objetivo = [
      {
        name: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 1
      },
      {
        name: 'Elevar el alcance en el uso de la información estadística que generamos.',
        code: 1
      },
    ];

    this.iniciativa = [
      {
        name: 'Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 1,
        co: 1,
        cl: 1,
        lider: 'Dirección y Subdirección General',
        cp: 1
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Elevar el alcance en el uso de la información estadística que generamos.',
        code: 2,
        co: 2,
        cl: 2,
        lider: 'Unidad de comunicaciones',
        cp: 1
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 3,
        co: 1,
        cl: 3,
        lider: 'Gerencia de Tecnología de la Información',
        cp: 1
      },
      {
        name: 'Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 4,
        co: 1,
        cl: 1,
        lider: 'Dirección y Subdirección General',
        cp: 2
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Elevar el alcance en el uso de la información estadística que generamos.',
        code: 5,
        co: 2,
        cl: 2,
        lider: 'Unidad de comunicaciones',
        cp: 2
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 6,
        co: 1,
        cl: 3,
        lider: 'Gerencia de Tecnología de la Información',
        cp: 2
      },
      {
        name: 'Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 7,
        co: 1,
        cl: 1,
        lider: 'Dirección y Subdirección General',
        cp: 3
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Elevar el alcance en el uso de la información estadística que generamos.',
        code: 8,
        co: 2,
        cl: 2,
        lider: 'Unidad de comunicaciones',
        cp: 3
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 9,
        co: 1,
        cl: 3,
        lider: 'Gerencia de Tecnología de la Información',
        cp: 3
      },
      {
        name: 'Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 10,
        co: 1,
        cl: 1,
        lider: 'Dirección y Subdirección General',
        cp: 4
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Elevar el alcance en el uso de la información estadística que generamos.',
        code: 11,
        co: 2,
        cl: 2,
        lider: 'Unidad de comunicaciones',
        cp: 4
      },
      {
        name: 'Utilizar la plataforma informática para diseminar la información estadística.',
        objetivo: 'Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto  Salvadoreño de Estadística.',
        code: 12,
        co: 1,
        cl: 3,
        lider: 'Gerencia de Tecnología de la Información',
        cp: 4
      },
    ];

    this.unidadLider = [
      {name: 'Dirección y Subdirección General', code: 1},
      {name: 'Unidad de comunicaciones', code: 2},
      {name: 'Gerencia de Tecnología de la Información', code: 3}
    ];

  }

  ngOnInit(): void {
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

    confirmDelete() {
          this.confirmationService.confirm({
              message: 'Está a punto de eliminar la iniciativa' +
              ' "Elaborar e implementar el Plan de transición de la DIGESTYC es ISE."',              header: '¿Eliminar?',
              icon: 'pi pi-info-circle',
              accept: () => {
                  this.showSuccessDelete();
              }
          });
      }

    showSuccess() {
      this.crear = false;
      this.messageService.add({severity:'success', summary: 'Agregado', detail:'Iniciativa agregada correctamente'});
    }

    showSuccessDelete() {
      this.messageService.add({severity:'success', summary: 'Eliminado', detail:'Iniciativa eliminada correctamente'});
    }

}
