import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-iniciativa',
  templateUrl: './crear-iniciativa.component.html',
  styleUrls: ['./crear-iniciativa.component.css'],
  providers: [MessageService]
})
export class CrearIniciativaComponent implements OnInit {

  constructor(private messageService: MessageService,private router:Router) { }

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

  guardar(){
    this.messageService.add({severity:'success', summary:'Guardado', detail:'Iniciativa guardada correctamente'});
    setTimeout(()=>this.router.navigate(['/listaIniciativas']), 2000 );
  }

}
