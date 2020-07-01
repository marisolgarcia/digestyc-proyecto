import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

	public paramIdRol: string; // Todos los parametros en url son string

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.paramIdRol = params.get('id_rol');
		});
	}

}
