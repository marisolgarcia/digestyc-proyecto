import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { FormUsuarioModule } from '../../components/seguridad/usuarios/form-usuario/form-usuario.module';
import { FormUsuarioComponent } from '../../components/seguridad/usuarios/form-usuario/form-usuario.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		SeguridadRoutingModule,
		FormUsuarioModule
	],
	entryComponents:[
		FormUsuarioComponent
	]
})
export class SeguridadModule { }
