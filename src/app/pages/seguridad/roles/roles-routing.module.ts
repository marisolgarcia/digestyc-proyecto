import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
	{
		path: '',
		component: RolesComponent
	},
	{
		path: 'crear',
		component: CrearComponent
	},
	{
		path: 'editar/:id_rol',
		component: EditarComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RolesRoutingModule { }
