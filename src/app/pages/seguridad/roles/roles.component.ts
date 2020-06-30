import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

	public roles: any[] = new Array();
	public columns: any[] = new Array();

	constructor() { }

	ngOnInit(): void {
		for(let i = 0; i < 15; i++){
			this.roles.push({
				nombre: 'Rol ' + (i + 1),
				descripcion: 'Descripcion ' + (i + 1),
				permisos: Math.floor(Math.random() * 10) + 1 // Genera num 1 - 10
			});
		}
		this.columns = [
			{field: 'nombre', header: 'Nombre'},
			{field: 'descripcion', header: 'Descripcion'},
			{field: 'permisos', header: 'Permisos'}
		]
	}

}
