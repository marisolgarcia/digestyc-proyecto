import { Component, OnInit } from '@angular/core';

import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-tipo-justificacion',
  templateUrl: './tipo-justificacion.component.html',
  styleUrls: ['./tipo-justificacion.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TipoJustificacionComponent implements OnInit {

	// Contenido de tabla
	public tipos: TipoJustificacion[] = new Array();
	public columns: any[];
	
	// Modal
	public displayModal: boolean = false;
	public modalTitle: string;
	public tipo: TipoJustificacion = {nombre: '', activo: true}; // A editar o eliminar

	// Si el modal se comportará como creador de filas
	private modoCreacion: boolean;

	constructor(
		private mService: MessageService,
		private cService: ConfirmationService,
	) { }

	ngOnInit(): void {
		for(let i = 0; i < 15; i++){
			this.tipos.push({
				id: i + 1,
				nombre: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio commodi, dolor consequuntur, dolorem dicta omnis cumque sed voluptatem eius adipisci cupiditate numquam repellendus alias magni, reiciendis labore aspernatur ab excepturi. ' + (i + 1),
				activo: Math.floor(Math.random() * 10) + 1 > 3 
			});
		}
		this.columns = [
			{field: 'nombre', header: 'Nombre'},
			{field: 'activo', header: 'Estado'},
		]
	}

	nuevo(){
		this.modoCreacion = true;
		this.modalTitle = 'Nuevo Tipo de Justificacion';
		this.tipo = {nombre: '', activo: true};
		this.displayModal = true;
	}

	edit(param: TipoJustificacion){
		this.modoCreacion = false;
		this.modalTitle = 'Editar Tipo de Justificacion';
		this.tipo = param;
		this.displayModal = true;
	}

	cancelar(){
		this.showToast('error', 'Error', 'Canceló la operacion');
		this.displayModal = false;
	}

	guardar(){
		// Aqui hay un bug, repite el elemento en la lista, corregirlo
		if(this.modoCreacion){
			this.tipos.push(this.tipo);
			this.tipo = {nombre: '', activo: true};
		}
		this.showToast('success', 'Guardado', 'Tipo de Justificacion guardado correctamente');
		this.displayModal = false;
	}

	delete(param: TipoJustificacion){
		this.cService.confirm({
            message: `Seguro que desea eliminar ${param.nombre}?`,
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
            	this.tipos.splice(this.tipos.indexOf(param), 1);
                this.showToast('success', 'Eliminado', 'Tipo de Justificacion eliminado correctamente');
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

interface TipoJustificacion {
	id?: number;
	nombre: string;
	activo: boolean;
}