import { Component, OnInit } from '@angular/core';

import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UnidadMedidaComponent implements OnInit {

	// Contenido de tabla
	public unidades: Unidad[] = new Array();
	public columns: any[];
	
	// Modal
	public displayModal: boolean = false;
	public modalTitle: string;
	public unidad: Unidad = {nombre: '', activo: true}; // Unidad a editar o eliminar

	constructor(
		private mService: MessageService,
		private cService: ConfirmationService,
	) { }

	ngOnInit(): void {
		for(let i = 0; i < 15; i++){
			this.unidades.push({
				id: i + 1,
				nombre: 'Unidad Medida ' + (i + 1),
				activo: Math.floor(Math.random() * 10) + 1 > 3 
			});
		}
		this.columns = [
			{field: 'nombre', header: 'Nombre'},
			{field: 'activo', header: 'Estado'},
		]
	}

	nuevo(){
		this.modalTitle = 'Nueva Unidad';
		this.unidad = {nombre: '', activo: true};
		this.displayModal = true;
	}

	edit(param: Unidad){
		this.modalTitle = 'Editar Unidad';
		this.unidad = param;
		this.displayModal = true;
	}

	cancelar(){
		this.showToast('error', 'Error', 'Canceló la operacion');
		this.displayModal = false;
	}

	guardar(){
		this.unidades.push(this.unidad);
		this.unidad = {nombre: '', activo: true};
		this.showToast('success', 'Guardado', 'Unidad guardada correctamente');
		this.displayModal = false;
	}

	delete(param: Unidad){
		this.cService.confirm({
            message: `Seguro que desea eliminar ${param.nombre}?`,
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
            	this.unidades.splice(this.unidades.indexOf(param), 1);
                this.showToast('success', 'Eliminado', 'Unidad eliminada correctamente');
            },
            reject: () => this.cancelar()
        });
	}

	private showToast(severity: string, titulo: string, mensaje: string){
		this.mService.add({
			severity: severity,
			summary: titulo,
			detail: mensaje
		});
	}
}

interface Unidad {
	id?: number;
	nombre: string;
	activo: boolean;
}