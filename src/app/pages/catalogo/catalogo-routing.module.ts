import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';
import { TipoJustificacionComponent } from './tipo-justificacion/tipo-justificacion.component';
import { FuenteFinanciamientoComponent } from './fuente-financiamiento/fuente-financiamiento.component';

const routes: Routes = [
	{
		path: 'fuente-financiamiento',
		component: FuenteFinanciamientoComponent
	},
	{
		path: 'tipo-justificacion',
		component: TipoJustificacionComponent
	},
	{
		path: 'unidad-medida',
		component: UnidadMedidaComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
