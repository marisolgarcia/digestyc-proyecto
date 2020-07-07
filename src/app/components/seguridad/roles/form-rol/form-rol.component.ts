import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class FormRolComponent implements OnInit {

	public srcPermisos: any[];
	public trgPermisos: any[];

	@Input('id-rol')
	private idRol: string;

	@Input('disabled')
	public disabled: boolean = false;

	public rol: any = {nombre: '', descripcion: ''};

	constructor(
		private mService: MessageService,
		private cService: ConfirmationService,
		private location: Location
	) { }

	ngOnInit(): void {
		this.srcPermisos = new Array();
		this.trgPermisos = new Array();
		for(let i = 1; i <= 15 ; i++){
			this.srcPermisos.push({nombre: 'Permiso Ejemplo num ' + i})
		}
		if(this.idRol){
			this.showRol();
		}
		else{
			this.rol = {nombre: '', descripcion: ''};
		}
	}

	private showRol(){
		this.rol = {
			nombre: 'Rol ' + this.idRol,
			descripcion: 'Descripcion ' + this.idRol
		}
		let randomIndex: number;
		for(let i = 0; i < 4 ; i++){
			randomIndex = Math.floor(Math.random() * 10) + 1;
			this.trgPermisos.push(this.srcPermisos[randomIndex]);
			this.srcPermisos.splice(randomIndex, 1)
		}
	}

	guardar(){
		this.showToast('success', 'Eliminado', 'Rol eliminado Correctamente');
	}

	delete(){
		this.cService.confirm({
            message: 'Seguro que desea eliminar?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.showToast('success', 'Eliminado', 'Rol eliminado Correctamente');
            }
        });
	}

	regresar(){
		this.location.back();
	}

	private showToast(severity: string, titulo: string, mensaje: string){
		this.mService.add({
			severity: severity,
			summary: titulo,
			detail: mensaje
		});
	}

}
