import { Component, OnInit } from '@angular/core';
import {ConfirmationService,MessageService} from 'primeng/api';

@Component({
  selector: 'app-lista-iniciativas',
  templateUrl: './lista-iniciativas.component.html',
  styleUrls: ['./lista-iniciativas.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ListaIniciativasComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
  }

  perspectivas=[{codigo:1,nombre:"Ciudadania satisfecha con nuestro servicio"},
    {codigo:2,nombre:"Eficacia de los procesos organizacionales"},
    {codigo:3,nombre:"Desarrollo y modernización organizacional y del talento humano"},
    {codigo:4,nombre:"Eficiencia en la movilizacion y manejo de recursos"},
  ];

  objetivos=[{co:1,objetivo:"Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto Salvadoreño de Estadística.",peso:25, cp:1},
    {co:2,objetivo:"Elevar el alcance en el uso de la información estadística que generamos.",peso:25, cp:1},
    {co:3,objetivo:"Diversificar el contenido temático de la información estadística que se entrega a la población.",peso:25, cp:1},
    {co:4,objetivo:"Crear plataformas para facilitar el acceso de información estadística interactiva para la ciudadanía.",peso:25, cp:1}];

  unidades=[{nombre:"Dirección General"},
    {nombre:"Subdirección General"},
    {nombre:"Unidad de Comunicaciones"},
    {nombre:"Gerencia de Tecnología de la Información"},]

  iniciativas=[{codigo:1,iniciativa:"Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE",lider:"Dirección y Subdirección General",co:1,cp:1,objetivo:"Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto Salvadoreño de Estadística."},
               {codigo:1,iniciativa:"Elaborar e implementar el calendario de publicaciones de la producción estadísticas",lider:"Unidad de comunicaciones",co:2,cp:1,objetivo:"Elevar el alcance en el uso de la información estadística que generamos."},
               {codigo:2,iniciativa:"Utilizar la plataforma informática para diseminar la información estadística",lider:"Gerencia de Tecnología de la Información",co:2,cp:1,objetivo:"Elevar el alcance en el uso de la información estadística que generamos."},
               {codigo:1,iniciativa:"Implementar mesas de coordinación interinstitucional del SEN para la transmisión de datos",lider:"Gerencia de Gestión y Análisis Estadístico",co:3,cp:1,objetivo:"Diversificar el contenido temático de la información estadística que se entrega a la población."},
                {codigo:2,iniciativa:"Elaborar e implementar la Estrategia Nacional de Desarrollo de Estadística  (ENDE)",lider:"Dirección y Subdirección General",co:3,cp:1,objetivo:"Diversificar el contenido temático de la información estadística que se entrega a la población."},
               {codigo:1,iniciativa:"Hacer uso óptimo de los registros administrativos para fines de aumentar la producción estadística.",lider:"Gerencia de Gestión y Análisis Estadístico",co:1,cp:2,objetivo:"Modernizar la producción estadística institucional"},
               {codigo:2,iniciativa:"Elaborar un plan de trabajo para la coordinación y articulación de la DIGESTYC con las instituciones del SEN",lider:"Gerencia de Gestión y Análisis Estadístico",co:1,cp:2,objetivo:"Modernizar la producción estadística institucional"}];

  displayFiltrar:boolean=false;
  iniciativa={codigo:null,iniciativa:null,lider:null}

  showDialogFiltrar() {
    this.displayFiltrar = true;
  }

  filtrar(){
    this.displayFiltrar = false;
  }

  showDialogEliminar(indice:number) {
    this.iniciativa=this.iniciativas[indice];
    this.confirmationService.confirm({
      message: `¿Desea eliminar la iniciativa <strong>"${this.iniciativa.iniciativa}"</strong>?`,
      header: 'Confirmación de eliminación',
      icon: 'pi pi-info-circle',
      acceptLabel:'Sí',
      rejectLabel:'No',
      accept: () => {
        this.messageService.add({severity:'success', summary:'Eliminado', detail:'Iniciativa eliminada correctamente'});
      }
    });
  }

}
