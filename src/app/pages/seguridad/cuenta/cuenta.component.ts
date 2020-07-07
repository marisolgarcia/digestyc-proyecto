import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

	public links: MenuItem[];

	constructor() { }

	ngOnInit(): void {
		this.links = [
            {label: 'Mis Datos', routerLink: 'mis-datos'},
            {label: 'Cambiar Contraseña', routerLink: 'cambiar-password'}
        ];
	}

}
