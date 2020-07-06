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

import { UnidadMedidaRoutingModule } from './unidad-medida-routing.module';
import { UnidadMedidaComponent } from './unidad-medida.component';

@NgModule({
	declarations: [
		UnidadMedidaComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		UnidadMedidaRoutingModule,
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
export class UnidadMedidaModule { }
