import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadMedidaRoutingModule } from './unidad-medida-routing.module';

import { UnidadMedidaComponent } from './unidad-medida.component';

@NgModule({
	declarations: [
		UnidadMedidaComponent
	],
	imports: [
		CommonModule,
		UnidadMedidaRoutingModule
	]
})
export class UnidadMedidaModule { }
