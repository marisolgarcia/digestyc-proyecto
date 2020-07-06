import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { CuentaComponent } from './cuenta.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';

import { CustomTabMenuModule } from '../../../components/custom-tab-menu/custom-tab-menu.module';
import { CustomTabMenuComponent } from '../../../components/custom-tab-menu/custom-tab-menu.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';

@NgModule({
	declarations: [
		CuentaComponent,
		CambiarPasswordComponent,
		MisDatosComponent
	],
	imports: [
		CommonModule,
		CuentaRoutingModule,
		CustomTabMenuModule,
		CardModule,
		InputTextModule,
		ButtonModule,
		ToastModule
	],
	entryComponents: [
		CustomTabMenuComponent
	]
})
export class CuentaModule { }
