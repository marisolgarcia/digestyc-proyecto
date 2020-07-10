import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PickListModule } from 'primeng/picklist';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

import { FormUsuarioComponent } from './form-usuario.component';



@NgModule({
	declarations: [FormUsuarioComponent],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		PickListModule,
		CardModule,
		DropdownModule,
		DialogModule,
		ToastModule,
		InputSwitchModule,
		ButtonModule
	],
	exports: [FormUsuarioComponent]
})
export class FormUsuarioModule { }
