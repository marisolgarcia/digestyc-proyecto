import { Component, OnInit } from '@angular/core';
import {ConfirmationService,MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editar-indicador',
  templateUrl: './editar-indicador.component.html',
  styleUrls: ['./editar-indicador.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class EditarIndicadorComponent implements OnInit {

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

  unidades=[{codigo:1,nombre:"cantidad"},
    {codigo:2,nombre:"calificación"},
    {codigo:3,nombre:"porcentaje"},];

  direccionalidades=[{codigo:1,nombre:"+"},
    {codigo:2,nombre:"-"},];

  iniciativasDisp=[
    {codigo:1,iniciativa:"Elaborar e implementar el calendario de publicaciones de la producción estadísticas"},
    {codigo:2,iniciativa:"Utilizar la plataforma informática para diseminar la información estadística"},
    {codigo:1,iniciativa:"Implementar mesas de coordinación interinstitucional del SEN para la transmisión de datos"},
    {codigo:2,iniciativa:"Elaborar e implementar la Estrategia Nacional de Desarrollo de Estadística  (ENDE)"},];

  iniciativasSel=[{codigo:1,iniciativa:"Elaborar e implementar  el Plan de transición de la DIGESTYC  en ISE"},];

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

  indicador={codigo:1,indicador:"Presentación de la iniciativa  de la ley de creación del  Instituto Salvadoreño de Estadística (ISE)",
    objetivo:this.objetivos[0],pers:this.perspectivas[0],peso:50,periodicidad:this.periodos[5],iniciativas:this.iniciativasSel,
  lineaBase:0,unidad:this.unidades[0],dir:this.direccionalidades[0],formula:"Pieza de correspondencia recibida por la AL",meta1:10,meta2:8,limite1:8,limite2:6};

  avancesEsperados=[{fecha:new Date('06/30/2020'),meta:5,limite:4},
                    {fecha:new Date('12/20/2020'),meta:5,limite:4},
                    {fecha:new Date('06/30/2021'),meta:4,limite:3},
                    {fecha:new Date('12/20/2021'),meta:4,limite:3},
                    {fecha:new Date('06/30/2022'),meta:5,limite:4},
                    {fecha:new Date('12/20/2022'),meta:5,limite:4},
                    {fecha:new Date('06/30/2023'),meta:4,limite:3},
                    {fecha:new Date('12/20/2023'),meta:4,limite:3},
                    {fecha:new Date('06/30/2024'),meta:5,limite:4},
                    {fecha:new Date('12/20/2024'),meta:5,limite:4},];

  parametrosFechas={periodo:null,fechaI:null,fechaF:null};

  generar(){
    this.avancesEsperados=[];
    let codPeriodo=this.indicador.periodicidad.codigo
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
    this.messageService.add({severity:'success', summary:'Guardado', detail:'Indicador editado correctamente'});
    setTimeout(()=>this.router.navigate(['/listaIndicadores']), 2000 );
  }

  disabled=true;

  showDialogEliminar() {
    this.confirmationService.confirm({
      message: `¿Desea eliminar el indicador?`,
      header: 'Confirmación de eliminación',
      icon: 'pi pi-info-circle',
      acceptLabel:'Sí',
      rejectLabel:'No',
      accept: () => {
        this.messageService.add({severity:'success', summary:'Eliminado', detail:'Indicador eliminado correctamente'});
        setTimeout(()=>this.router.navigate(['/listaIndicadores']), 2000 );
      },
      /*reject: () => {
        this.messageService.add({severity:'error', summary:'Cancelado', detail:'Se canceló la operación'});
      }*/
    });
  }

}
