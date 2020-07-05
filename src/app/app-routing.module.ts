import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { EditarIndicadorComponent } from './pages/planificacion/editar-indicador/editar-indicador.component';
import { ListaPlanesAnualesComponent } from './pages/planificacion/lista-planes-anuales/lista-planes-anuales.component';
import { IniciativasPlanAnualComponent } from './pages/planificacion/iniciativas-plan-anual/iniciativas-plan-anual.component';
import { ListaActividadesComponent } from './pages/planificacion/lista-actividades/lista-actividades.component';
import { CrearActividadComponent } from './pages/planificacion/crear-actividad/crear-actividad.component';
import { VerDetalleActividadComponent } from './pages/planificacion/ver-detalle-actividad/ver-detalle-actividad.component';
import { EditarActividadComponent } from './pages/planificacion/editar-actividad/editar-actividad.component';
import { CierreComponent } from './pages/planificacion/cierre/cierre.component';
import { ListaActividadSegComponent } from './pages/planificacion/lista-actividad-seg/lista-actividad-seg.component';
import { ListaActividadSegTodasComponent } from './pages/planificacion/lista-actividad-seg-todas/lista-actividad-seg-todas.component';
import { EjecucionesActSegComponent } from './pages/planificacion/ejecuciones-act-seg/ejecuciones-act-seg.component';
import { IngresoEjecucionActSegComponent } from './pages/planificacion/ingreso-ejecucion-act-seg/ingreso-ejecucion-act-seg.component';
import { DetalleEjecucionActSegComponent } from './pages/planificacion/detalle-ejecucion-act-seg/detalle-ejecucion-act-seg.component';
import { EditarEjecucionActSegComponent } from './pages/planificacion/editar-ejecucion-act-seg/editar-ejecucion-act-seg.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'ejemplo', component: EjemploComponent},
      {path: 'editarIndicador', component: EditarIndicadorComponent},
      {path: 'listaPlanesAnuales', component: ListaPlanesAnualesComponent},
      {path: 'iniciativasPlanAnual', component: IniciativasPlanAnualComponent},
      {path: 'listaActividades', component: ListaActividadesComponent},
      {path: 'listaActividades/crearActividad', component: CrearActividadComponent},
      {path: 'listaActividades/detalleActividad', component: VerDetalleActividadComponent},
      {path: 'listaActividades/editarActividad', component: EditarActividadComponent},
      {path: 'cierre', component: CierreComponent},
      {path: 'seguimientoActividades', component: ListaActividadSegComponent},
      {path: 'seguimientoActividadesTodas', component: ListaActividadSegTodasComponent},
      {path: 'ejecucionesActividad', component: EjecucionesActSegComponent},
      {path: 'ejecucionesActividad/ingresoEjecucion', component: IngresoEjecucionActSegComponent},
      {path: 'ejecucionesActividad/detalleEjecucion', component: DetalleEjecucionActSegComponent},
      {path: 'ejecucionesActividad/editarEjecucion', component: EditarEjecucionActSegComponent},

      /*{path: 'setup', loadChildren: () => import('./components/setup/setup.module').then(m => m.SetupModule)},
      {path: 'theming', loadChildren: () => import('./components/theming/theming.module').then(m => m.ThemingModule)},
      {path: 'icons', loadChildren: () => import('./components/icons/icons.module').then(m => m.IconsModule)},*/

    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
