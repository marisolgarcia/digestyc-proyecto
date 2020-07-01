import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
	{
		path: '',
		component: RolesComponent
	},
	{
		path: 'crear',
		component: CrearComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RolesRoutingModule { }
