import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuenteFinanciamientoComponent } from './fuente-financiamiento.component';

const routes: Routes = [
	{path: '', component: FuenteFinanciamientoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuenteFinanciamientoRoutingModule { }
