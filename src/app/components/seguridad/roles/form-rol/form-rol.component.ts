import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.css']
})
export class FormRolComponent implements OnInit {

	public srcPermisos: any[];
	public trgPermisos: any[];

	@Input('id-rol')
	private idRol: string;

	constructor() { }

	ngOnInit(): void {
		this.srcPermisos = new Array();
		this.trgPermisos = new Array();
		for(let i = 1; i <= 15 ; i++){
			this.srcPermisos.push({nombre: 'Permiso Ejemplo num ' + i})
		}

		console.log(this.idRol);
	}

}
