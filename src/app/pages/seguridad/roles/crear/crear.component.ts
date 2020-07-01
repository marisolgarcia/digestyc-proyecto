import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

	public srcPermisos: any[];
	public trgPermisos: any[];

	constructor() { }

	ngOnInit(): void {
		this.srcPermisos = new Array();
		this.trgPermisos = new Array();
		for(let i = 1; i <= 15 ; i++){
			this.srcPermisos.push({nombre: 'Permiso Ejemplo num ' + i})
		}
	}

}
