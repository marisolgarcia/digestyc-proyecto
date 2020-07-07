import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng/api';

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
