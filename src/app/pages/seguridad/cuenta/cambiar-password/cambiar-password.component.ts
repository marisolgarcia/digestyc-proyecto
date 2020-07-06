import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css'],
  providers: [MessageService]
})
export class CambiarPasswordComponent implements OnInit {

	constructor(
		private mService: MessageService,
	) { }

	ngOnInit(): void {
	}

	guardar(){
		this.showToast('success', 'Guardado', 'Contraseña Guardada Correctamente');
	}

	private showToast(severity: string, titulo: string, mensaje: string){
		this.mService.add({
			severity: severity,
			summary: titulo,
			detail: mensaje
		});
	}
}
