import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-indicador',
  templateUrl: './crear-indicador.component.html',
  styleUrls: ['./crear-indicador.component.css'],
  providers: [MessageService]
})
export class CrearIndicadorComponent implements OnInit {

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

  unidades=[{codigo:1,nombre:"cantidad"},
           {codigo:2,nombre:"calificación"},
            {codigo:3,nombre:"porcentaje"},];

  direccionalidades=[{codigo:1,nombre:"+"},
                      {codigo:2,nombre:"-"},];

  iniciativasDisp=[{codigo:1,iniciativa:"Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE"},
    {codigo:1,iniciativa:"Elaborar e implementar el calendario de publicaciones de la producción estadísticas"},
    {codigo:2,iniciativa:"Utilizar la plataforma informática para diseminar la información estadística"},
    {codigo:1,iniciativa:"Implementar mesas de coordinación interinstitucional del SEN para la transmisión de datos"},
    {codigo:2,iniciativa:"Elaborar e implementar la Estrategia Nacional de Desarrollo de Estadística  (ENDE)"},];

  iniciativasSel=[];

  periodos=[{codigo:1,nombre:"Quincenal"},
            {codigo:2,nombre:"Mensual"},
            {codigo:3,nombre:"Bimestral"},
            {codigo:4,nombre:"Trimestral"},
            {codigo:5,nombre:"Cuatrimestral"},
            {codigo:6,nombre:"Semestral"},
            {codigo:7,nombre:"Anual"},
            {codigo:8,nombre:"Personalizado"},];

  select1=true;
  select2=false;
  select3=false;
  select4=false;

  avancesEsperados=[];

  parametrosFechas={periodo:null,fechaI:null,fechaF:null};

  generar(){
    let codPeriodo=this.parametrosFechas.periodo.codigo;
    let fechaI=this.parametrosFechas.fechaI;
    let fechaF=this.parametrosFechas.fechaF;
    if(codPeriodo==1){
      let quincena1=new Date(fechaI.getFullYear(), fechaI.getMonth(), 15);
      let quincena2=new Date(fechaI.getFullYear(), fechaI.getMonth() + 1, 0);
      while (quincena1 <= fechaF && quincena2 <= fechaF){
        this.avancesEsperados.push({fecha:quincena1,meta:null,limite:null});
        this.avancesEsperados.push({fecha:quincena2,meta:null,limite:null});
        let fechaN= new Date(quincena2.getTime());
        fechaN=new Date(fechaN.setDate(fechaN.getDate() + 1));
        quincena1=new Date(fechaN.getFullYear(), fechaN.getMonth(), 15);
        quincena2=new Date(fechaN.getFullYear(), fechaN.getMonth() + 1, 0);
      }
    }
    if(codPeriodo==2){
      let ultimoDia=new Date(fechaI.getFullYear(), fechaI.getMonth() + 1, 0);
      while (ultimoDia <= fechaF){
        this.avancesEsperados.push({fecha:ultimoDia,meta:null,limite:null});
        let fechaN= new Date(ultimoDia.getTime());
        fechaN=new Date(fechaN.setDate(fechaN.getDate() + 1));
        ultimoDia=new Date(fechaN.getFullYear(), fechaN.getMonth() + 1, 0);
      }
    }
  }

  guardar(){
    this.messageService.add({severity:'success', summary:'Guardado', detail:'Indicador guardado correctamente'});
    setTimeout(()=>this.router.navigate(['/listaIndicadores']), 2000 );
  }

}
