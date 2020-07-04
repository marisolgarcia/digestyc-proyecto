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

import { TipoJustificacionRoutingModule } from './tipo-justificacion-routing.module';
import { TipoJustificacionComponent } from './tipo-justificacion.component';

@NgModule({
  	declarations: [TipoJustificacionComponent],
	imports: [
		CommonModule,
		FormsModule,
		TipoJustificacionRoutingModule,
		TableModule,
		ButtonModule,
		ToastModule,
		ConfirmDialogModule,
		DialogModule,
		InputTextModule,
		InputTextareaModule,
		InputSwitchModule,
	]
})
export class TipoJustificacionModule { }
