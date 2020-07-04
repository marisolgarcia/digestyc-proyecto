import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'fuente-financiamiento',
		loadChildren: () => import('./fuente-financiamiento/fuente-financiamiento.module').then(m => m.FuenteFinanciamientoModule)
	},
	{
		path: 'tipo-justificacion',
		loadChildren: () => import('./tipo-justificacion/tipo-justificacion.module').then(m => m.TipoJustificacionModule)
	},
	{
		path: 'unidad-medida',
		loadChildren: () => import('./unidad-medida/unidad-medida.module').then(m => m.UnidadMedidaModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
