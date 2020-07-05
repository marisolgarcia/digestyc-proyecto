import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sub-menu-seguimiento',
  templateUrl: './sub-menu-seguimiento.component.html',
  styleUrls: ['./sub-menu-seguimiento.component.css']
})
export class SubMenuSeguimientoComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Vigentes', url: '/seguimientoActividades'},
      {label:'Todas', url: '/seguimientoActividades/todas'}
    ];
  }

}
