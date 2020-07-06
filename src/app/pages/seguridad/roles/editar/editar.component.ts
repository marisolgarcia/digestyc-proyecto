import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormRolComponent } from '../../../../components/seguridad/roles/form-rol/form-rol.component'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

	public paramIdRol: string; // Todos los parametros en url son string
	public disabled: boolean = true;

	@ViewChild(FormRolComponent)
	private formRol:FormRolComponent;

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.paramIdRol = params.get('id_rol');
		});
	}

	delete(){
		this.formRol.delete();
	}

}
