import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { FormRolComponent } from './form-rol.component';

@NgModule({
	declarations: [FormRolComponent],
	imports: [
		CommonModule,
		CardModule,
	    InputTextModule,
	    InputTextareaModule,
	    PickListModule,
	    FormsModule,
	    ButtonModule,
	    ToastModule,
	    ConfirmDialogModule
	],
	exports: [FormRolComponent]
})
export class FormRolModule { }
