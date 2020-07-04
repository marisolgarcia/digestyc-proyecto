import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-tabmenu-plan-estrategico',
  templateUrl: './tabmenu-plan-estrategico.component.html',
  styleUrls: ['./tabmenu-plan-estrategico.component.css']
})
export class TabmenuPlanEstrategicoComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Perspectivas', routerLink:'/listaPerspectivas'},
      {label: 'Objetivos Estratégicos', routerLink:'/listaObjetivosEstrategicos'},
      {label: 'Iniciativas', routerLink:'/listaIniciativas'},
      {label: 'Indicadores', routerLink:'/listaIndicadores'}
    ];
  }

}
