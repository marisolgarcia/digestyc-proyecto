import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadMedidaComponent } from './unidad-medida.component';

const routes: Routes = [
	{path: '', component: UnidadMedidaComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UnidadMedidaRoutingModule { }
