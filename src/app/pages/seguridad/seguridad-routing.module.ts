import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'roles',
		loadChildren: () => import('./roles/roles.module').then( m => m.RolesModule )
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SeguridadRoutingModule { }
