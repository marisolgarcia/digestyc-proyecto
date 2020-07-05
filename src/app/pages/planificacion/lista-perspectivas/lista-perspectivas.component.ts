import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-perspectivas',
  templateUrl: './lista-perspectivas.component.html',
  styleUrls: ['./lista-perspectivas.component.css']
})
export class ListaPerspectivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  perspectivas=[{codigo:1,nombre:"Ciudadania satisfecha con nuestro servicio",descripcion:"Esta perspectiva responde a la forma en que se van a satisfacer las necesidades del segmento de la Micro y Pequeña Empresa y a la población en general de manera que los servicios que brinda DIGESTYC sean accesibles a todos."},
    {codigo:2,nombre:"Eficacia de los procesos organizacionales",descripcion:"Esta perspectiva responde a la necesidad  de  enfocar las actividades de la Institución  en  aquellos procesos considerados “críticos”, a manera de identificar y articular aquellos procesos que son estratégicos para DIGESTYC."}];

  persp={codigo:null,nombre:null,descripcion:null};
  editable=false;

  editar(indice:number){
    this.persp=this.perspectivas[indice];
    this.editable=true;
  }

  agregar(){
    if (!this.editable)
      this.perspectivas.push(this.persp);

    this.editable=false;
    this.persp={codigo:null,nombre:null,descripcion:null};
  }


}
