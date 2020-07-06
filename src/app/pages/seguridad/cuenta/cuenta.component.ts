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
            {label: 'Mis Datos', icon: 'pi pi-fw pi-user', routerLink: 'mis-datos'},
            {label: 'Cambiar Contraseña', icon: 'pi pi-fw pi-lock', routerLink: 'cambiar-password'}
        ];
	}

}
