import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
	estado: any[] = [];
	unidadOrg: any[] = [];
	cargos: any[] = [];
	roles: any[] = [];
	rolesSeleccionados: any[] = [];
	unidad: number;
	cargo: number;
	activo = true;

	@Input('usuario')
	public usuario: any = null;

	@Input('disabled')
	public disabled: boolean = false;

	constructor() {	}

	ngOnInit(): void {
		this.estado = [
			{label: 'Activo', value: {id: 1, name: 'Activo'}},
			{label: 'Desactivado', value: {id: 2, name: 'Desactivado'}}
		];
		this.unidadOrg = [
			{label: 'Gerencia General', value: {id: 1, name: 'Gerencia General'}},
			{label: 'Gerencia de Administración y Finanzas', value: {id: 2, name: 'Gerencia de Administración y Finanzas'}}
		];
		this.cargos = [
			{label: 'Gerente General', value: {id: 1, nombre: 'Gerente General'}},
			{label: 'Asistente de Gerente', value: {id: 2, nombre: 'Asistente de Gerente'}},
			{label: 'Planificador', value: {id: 3, nombre: 'Planificador'}},
		];
		this.roles = [
			{nombre: 'Jefe de Unidad'},
			{nombre: 'Jefe de Planificación'},
		];
		console.log(this.usuario);
	}

	cambioPuestos(unidad) {
		if (unidad === 1){
			this.cargos = [
				{label: 'Gerente General', value: {id: 1, nombre: 'Gerente General'}},
				{label: 'Asistente de Gerente', value: {id: 2, nombre: 'Asistente de Gerente'}},
				{label: 'Planificador', value: {id: 3, nombre: 'Planificador'}},
			];
		}
		else {
			this.cargos = [
				{label: 'Gerente de Finanzas', value: {id: 1, nombre: 'Gerente de Finanzas'}},
				{label: 'Secretaria Administrativa', value: {id: 2, nombre: 'Secretaria Administrativa'}},
				{label: 'Analista Contable', value: {id: 3, nombre: 'Analista Contable'}},
			];
		}
	}

}
