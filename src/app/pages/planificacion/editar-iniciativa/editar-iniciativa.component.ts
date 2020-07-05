import { Component, OnInit } from '@angular/core';
import {ConfirmationService,MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editar-iniciativa',
  templateUrl: './editar-iniciativa.component.html',
  styleUrls: ['./editar-iniciativa.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class EditarIniciativaComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private messageService: MessageService,private router:Router) { }

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
    {nombre:"Gerencia de Tecnología de la Información"},];

  iniciativa={codigo:1,iniciativa:"Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE",lider:this.unidades[0],persp:this.perspectivas[0],objetivo:this.objetivos[0],
              anio1:5,anio2:10,anio3:8,anio4:10,anio5:7,medio:"El informe de revisión de los borrados de ley del ISE existentes",resultado:"Un informe de la revisión de los borradores de ley del ISE existente",
              indicador:"Presentación de la iniciativa  de la ley de creación del  Instituto Salvadoreño de Estadística"};

  guardar(){
    this.messageService.add({severity:'success', summary:'Guardado', detail:'Iniciativa editada correctamente'});
    setTimeout(()=>this.router.navigate(['/listaIniciativas']), 2000 );
  }

  disabled=true;

  showDialogEliminar() {
    this.confirmationService.confirm({
      message: `¿Desea eliminar la iniciativa?`,
      header: 'Confirmación de eliminación',
      icon: 'pi pi-info-circle',
      acceptLabel:'Sí',
      rejectLabel:'No',
      accept: () => {
        this.messageService.add({severity:'success', summary:'Eliminado', detail:'Iniciativa eliminada correctamente'});
        setTimeout(()=>this.router.navigate(['/listaIniciativas']), 2000 );
      },
      /*reject: () => {
        this.messageService.add({severity:'error', summary:'Cancelado', detail:'Se canceló la operación'});
      }*/
    });
  }

}
