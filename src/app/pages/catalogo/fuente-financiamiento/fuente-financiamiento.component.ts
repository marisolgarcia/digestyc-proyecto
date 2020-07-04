import { Component, OnInit } from '@angular/core';

import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-fuente-financiamiento',
  templateUrl: './fuente-financiamiento.component.html',
  styleUrls: ['./fuente-financiamiento.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class FuenteFinanciamientoComponent implements OnInit {

	// Contenido de tabla
	public fuentes: FuenteFinanciamiento[] = new Array();
	public columns: any[];
	
	// Modal
	public displayModal: boolean = false;
	public modalTitle: string;
	public fuente: FuenteFinanciamiento = {nombre: '', activo: true}; // A editar o eliminar

	constructor(
		private mService: MessageService,
		private cService: ConfirmationService,
	) { }

	ngOnInit(): void {
		for(let i = 0; i < 15; i++){
			this.fuentes.push({
				id: i + 1,
				nombre: 'Fuente de Financiamiento ' + (i + 1),
				activo: Math.floor(Math.random() * 10) + 1 > 3 
			});
		}
		this.columns = [
			{field: 'nombre', header: 'Nombre'},
			{field: 'activo', header: 'Estado'},
		]
	}

	nuevo(){
		this.modalTitle = 'Nueva Fuente de Financiamiento';
		this.fuente = {nombre: '', activo: true};
		this.displayModal = true;
	}

	edit(param: FuenteFinanciamiento){
		this.modalTitle = 'Editar Fuente de Financiamiento';
		this.fuente = param;
		this.displayModal = true;
	}

	cancelar(){
		this.showToast('error', 'Error', 'Canceló la operacion');
		this.displayModal = false;
	}

	guardar(){
		// Aqui hay un bug, repite el elemento en la lista, corregirlo
		this.fuentes.push(this.fuente);
		this.fuente = {nombre: '', activo: true};
		this.showToast('success', 'Guardado', 'Fuente de Financiamiento guardada correctamente');
		this.displayModal = false;
	}

	delete(param: FuenteFinanciamiento){
		this.cService.confirm({
            message: `Seguro que desea eliminar ${param.nombre}?`,
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
            	this.fuentes.splice(this.fuentes.indexOf(param), 1);
                this.showToast('success', 'Eliminado', 'Fuente de Financiamiento eliminada correctamente');
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

interface FuenteFinanciamiento {
	id?: number;
	nombre: string;
	activo: boolean;
}