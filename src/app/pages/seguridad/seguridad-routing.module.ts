import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'roles',
		loadChildren: () => import('./roles/roles.module').then( m => m.RolesModule )
	},
	{
		path: 'mi-cuenta',
		loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaModule )
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SeguridadRoutingModule { }
