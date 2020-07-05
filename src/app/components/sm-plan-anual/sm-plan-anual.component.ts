import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sm-plan-anual',
  templateUrl: './sm-plan-anual.component.html',
  styleUrls: ['./sm-plan-anual.component.css']
})
export class SmPlanAnualComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [
            {label: 'Iniciativas', routerLink:'/iniciativasPlanAnual'},
            {label: 'Actividades', routerLink:'/listaActividades'},
            {label: 'Cierre', routerLink:'/cierre'}
        ];

  }

}
