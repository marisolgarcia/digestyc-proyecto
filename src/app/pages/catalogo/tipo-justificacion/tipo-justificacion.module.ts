import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoJustificacionRoutingModule } from './tipo-justificacion-routing.module';

import { TipoJustificacionComponent } from './tipo-justificacion.component';

@NgModule({
  	declarations: [TipoJustificacionComponent],
	imports: [
		CommonModule,
		TipoJustificacionRoutingModule
	]
})
export class TipoJustificacionModule { }
