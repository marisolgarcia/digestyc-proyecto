import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-lista-planes-estrategicos',
  templateUrl: './lista-planes-estrategicos.component.html',
  styleUrls: ['./lista-planes-estrategicos.component.css'],
  providers: [MessageService]
})
export class ListaPlanesEstrategicosComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  estados=[{codigo:1,nombre:"A programar"},
          {codigo:2,nombre:"Vigente"},
          {codigo:3,nombre:"No Vigente"},];

  planes=[{anioI:2000,anioF:2004,estado:this.estados[2], obj:12, inic:30},
          {anioI:2005,anioF:2009,estado:this.estados[2], obj:12, inic:30},
          {anioI:2010,anioF:2014,estado:this.estados[2], obj:12, inic:30},
          {anioI:2015,anioF:2019,estado:this.estados[2], obj:15, inic:35},
          {anioI:2020,anioF:2024,estado:this.estados[1], obj:15, inic:35},
          {anioI:2025,anioF:2029,estado:this.estados[0], obj:1, inic:3}];

  mostrarCrear: boolean = false;
  mostrarEditar:boolean=false;
  mostrarFiltrar:boolean=false;
  planE={anioI:null,anioF:null,estado:this.estados[0],obj:0, inic:0};

  showDialogCrear() {
    this.planE={anioI:null,anioF:null,estado:this.estados[0],obj:0, inic:0};
    this.mostrarCrear = true;
  }
  guardarNuevo(){
    //this.planE.anioF=this.planE.anioI+4;
    //this.planes.push(this.planE);
    this.planE=null;
    this.mostrarCrear= false;
    this.messageService.add({severity:'success', summary:'Guardado', detail:'Plan Estratégico guardado correctamente'});
  }

  showDialogEditar(indice:number) {
    this.planE=this.planes[indice];
    this.mostrarEditar = true;
  }

  editar(){
    this.planE.anioF=this.planE.anioI+4;
    this.planE=null;
    this.mostrarEditar = false;
    this.messageService.add({severity:'success', summary:'Guardado', detail:'Plan Estratégico guardado correctamente'});
  }

  showDialogFiltrar() {
    this.mostrarFiltrar = true;
  }

  filtrar(){
    this.mostrarFiltrar = false;
  }




}
