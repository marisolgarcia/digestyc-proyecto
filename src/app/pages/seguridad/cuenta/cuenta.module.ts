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
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { CardUsuarioModule } from '../../../components/seguridad/usuarios/card-usuario/card-usuario.module';

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
        ToastModule,
        CardUsuarioModule
    ]
})
export class CuentaModule { }
