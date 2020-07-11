import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: 'quinquenal',
		loadChildren: () => import('./quinquenal/quinquenal.module').then( m => m.QuinquenalModule )
	},
	{
		path: 'anual',
		loadChildren: () => import('./anual/anual.module').then( m => m.AnualModule )
	},
	{
		path: 'reporte',
		loadChildren: () => import('./reporte/reporte.module').then( m => m.ReporteModule )
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanificacionRoutingModule { }
