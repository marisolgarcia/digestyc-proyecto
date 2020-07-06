import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaComponent } from './cuenta.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';

const routes: Routes = [
	{
		path: '',
		component: CuentaComponent,
		children: [
			{path: 'mis-datos', component: MisDatosComponent},
			{path: 'cambiar-password', component: CambiarPasswordComponent},
		],
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
