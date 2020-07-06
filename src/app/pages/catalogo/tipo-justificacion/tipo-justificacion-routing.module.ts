import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoJustificacionComponent } from './tipo-justificacion.component';

const routes: Routes = [
	{path: '', component: TipoJustificacionComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TipoJustificacionRoutingModule { }
