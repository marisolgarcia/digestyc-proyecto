import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { FormUsuarioModule } from '../../components/seguridad/usuarios/form-usuario/form-usuario.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		SeguridadRoutingModule,
		FormUsuarioModule
	]
})
export class SeguridadModule { }
