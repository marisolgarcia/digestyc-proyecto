import { Component, OnInit } from '@angular/core';
import {ConfirmationService,MessageService} from 'primeng/api';

@Component({
  selector: 'app-lista-indicadores',
  templateUrl: './lista-indicadores.component.html',
  styleUrls: ['./lista-indicadores.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ListaIndicadoresComponent implements OnInit {

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

  periodos=[{codigo:1,nombre:"Quincenal"},
    {codigo:2,nombre:"Mensual"},
    {codigo:3,nombre:"Bimestral"},
    {codigo:4,nombre:"Trimestral"},
    {codigo:5,nombre:"Cuatrimestral"},
    {codigo:6,nombre:"Semestral"},
    {codigo:3,nombre:"Anual"},
    {codigo:3,nombre:"Personalizado"},];

  indicadores=[{codigo:1,indicador:"Presentación de la iniciativa  de la ley de creación del  Instituto Salvadoreño de Estadística (ISE)",co:1,cp:1,peso:50,periodicidad:"Anual",iniciativas:1,objetivo:"Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto Salvadoreño de Estadística."},
    {codigo:2,indicador:"Cumplimiento del plan de transición",co:1,cp:1,peso:50,periodicidad:"Semestral",iniciativas:1,objetivo:"Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto Salvadoreño de Estadística."},
    {codigo:1,indicador:"Cumplimiento del calendario quinquenal de publicaciones institucionales",co:2,cp:1,peso:100,periodicidad:"Anual",iniciativas:2,objetivo:"Elevar el alcance en el uso de la información estadística que generamos."},
    {codigo:1,indicador:"Cumplimiento del plan quinquenal de contenidos temáticos a publicar",co:3,cp:1,peso:100,periodicidad:"Anual",iniciativas:2,objetivo:"Diversificar el contenido temático de la información estadística que se entrega a la población."},
    {codigo:1,indicador:"Aplicativo desarrollado  para publicación de indicadores ",co:4,cp:1,peso:50,periodicidad:"Bienual",iniciativas:1,objetivo:"Crear plataformas para facilitar el acceso de información estadística interactiva para la ciudadanía."},
    {codigo:2,indicador:"Cumplimiento de un plan de indicadores a publicar ",co:4,cp:1,peso:50,periodicidad:"Anual",iniciativas:1,objetivo:"Crear plataformas para facilitar el acceso de información estadística interactiva para la ciudadanía."},
    {codigo:1,indicador:"Metodologías institucionales actualizadas por año",co:1,cp:2,peso:50,periodicidad:"Anual",iniciativas:3,objetivo:"Modernizar la producción estadística institucional"},
    {codigo:1,indicador:"Cumplimientos de tiempos de ejecución del inventario de procesos en los diferentes procedimientos",co:2,cp:2,peso:100,periodicidad:"Anual",iniciativas:3,objetivo:"Optimizar los tiempos de ejecución de todos nuestros procedimientos."},
    {codigo:1,indicador:"Procesos de gestión institucional certificados",co:3,cp:2,peso:100,periodicidad:"Anual",iniciativas:2,objetivo:"Alcanzar certificaciones de clase mundial en nuestros procesos de gestión de información estadística."},
];

  displayFiltrar:boolean=false;
  indicador={codigo:null,indicador:null};

  showDialogFiltrar() {
    this.displayFiltrar = true;
  }

  filtrar(){
    this.displayFiltrar = false;
  }

  showDialogEliminar(indice:number) {
    this.indicador=this.indicadores[indice];
    this.confirmationService.confirm({
      message: `¿Desea eliminar el indicador <strong>"${this.indicador.indicador}"</strong>?`,
      header: 'Confirmación de eliminación',
      icon: 'pi pi-info-circle',
      acceptLabel:'Sí',
      rejectLabel:'No',
      accept: () => {
        this.messageService.add({severity:'success', summary:'Eliminado', detail:'Indicador eliminado correctamente'});
      }
    });
  }

}
