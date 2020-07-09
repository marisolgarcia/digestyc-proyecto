import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';
import { TipoJustificacionComponent } from './tipo-justificacion/tipo-justificacion.component';
import { FuenteFinanciamientoComponent } from './fuente-financiamiento/fuente-financiamiento.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations: [
		UnidadMedidaComponent,
		TipoJustificacionComponent,
		FuenteFinanciamientoComponent
	],
	imports: [
		FormsModule,
		CommonModule,
		CatalogoRoutingModule,
		TableModule,
		ButtonModule,
		ToastModule,
		ConfirmDialogModule,
		DialogModule,
		InputTextModule,
		InputTextareaModule,
		InputSwitchModule,
		PipesModule,
	]
})
export class CatalogoModule { }
