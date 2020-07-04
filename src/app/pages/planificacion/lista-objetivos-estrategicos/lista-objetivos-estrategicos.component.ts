import { Component, OnInit } from '@angular/core';
import {ConfirmationService,MessageService} from 'primeng/api';

@Component({
  selector: 'app-lista-objetivos-estrategicos',
  templateUrl: './lista-objetivos-estrategicos.component.html',
  styleUrls: ['./lista-objetivos-estrategicos.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ListaObjetivosEstrategicosComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
  }

  perspectivas=[{codigo:1,nombre:"Ciudadania satisfecha con nuestro servicio"},
                {codigo:2,nombre:"Eficacia de los procesos organizacionales"},
                 {codigo:3,nombre:"Desarrollo y modernización organizacional y del talento humano"},
                {codigo:4,nombre:"Eficiencia en la movilizacion y manejo de recursos"},
                ];

  objetivos=[{co:1,objetivo:"Realizar las gestiones necesarias para transformar a la DIGESTYC en el Instituto Salvadoreño de Estadística.",peso:25, persp:this.perspectivas[0]},
             {co:2,objetivo:"Elevar el alcance en el uso de la información estadística que generamos.",peso:25, persp:this.perspectivas[0]},
             {co:3,objetivo:"Diversificar el contenido temático de la información estadística que se entrega a la población.",peso:25, persp:this.perspectivas[0]},
             {co:4,objetivo:"Crear plataformas para facilitar el acceso de información estadística interactiva para la ciudadanía.",peso:25, persp:this.perspectivas[0]},
              {co:1,objetivo:"Modernizar la producción estadística institucional.",peso:40, persp:this.perspectivas[1]},
              {co:2,objetivo:"Optimizar los tiempos de ejecución de todos nuestros procedimientos.",peso:45, persp:this.perspectivas[1]},
              {co:3,objetivo:"Alcanzar certificaciones de clase mundial en nuestros procesos de gestión de información estadística.",peso:15, persp:this.perspectivas[1]}
              ];

  objetivo=null
  display:boolean=false;
  displayFiltrar:boolean=false;
  accion="";

  showDialog(indice?:number) {
    console.log(indice)
    if (indice != null){
      this.objetivo=this.objetivos[indice];
      this.accion="Editar";
    }
    else{
      this.objetivo={co:null,objetivo:null,peso:null, persp:null};
      this.accion="Crear";
    }
    this.display = true;
  }

  guardar(){
    this.objetivo=null;
    this.display = false;
    this.messageService.add({severity:'success', summary:'Guardado', detail:'Objetivo Estratégico guardado correctamente'});
  }

  showDialogFiltrar() {
    this.displayFiltrar = true;
  }

  filtrar(){
    this.displayFiltrar = false;
  }

  showDialogEliminar(indice:number) {
    this.objetivo=this.objetivos[indice];
    this.confirmationService.confirm({
      message: `¿Desea eliminar el objetivo estratégico <strong>"${this.objetivo.objetivo}"</strong>?`,
      header: 'Confirmación de eliminación',
      icon: 'pi pi-info-circle',
      acceptLabel:'Sí',
      rejectLabel:'No',
      accept: () => {
        this.messageService.add({severity:'success', summary:'Eliminado', detail:'Objetivo Estratégico eliminado correctamente'});
      },
      /*reject: () => {
        this.messageService.add({severity:'error', summary:'Cancelado', detail:'Se canceló la operación'});
      }*/
    });
  }

}
