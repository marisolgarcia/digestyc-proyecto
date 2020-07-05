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
import { ReportesComponent } from './pages/planificacion/reportes/reportes.component';
import { ListaActividadSegComponent } from './pages/planificacion/lista-actividad-seg/lista-actividad-seg.component';
import { ListaActividadSegTodasComponent } from './pages/planificacion/lista-actividad-seg-todas/lista-actividad-seg-todas.component';
import { EjecucionesActSegComponent } from './pages/planificacion/ejecuciones-act-seg/ejecuciones-act-seg.component';
import { IngresoEjecucionActSegComponent } from './pages/planificacion/ingreso-ejecucion-act-seg/ingreso-ejecucion-act-seg.component';
import { DetalleEjecucionActSegComponent } from './pages/planificacion/detalle-ejecucion-act-seg/detalle-ejecucion-act-seg.component';
import { ListaSegIndicadoresComponent } from './pages/planificacion/lista-seg-indicadores/lista-seg-indicadores.component';
import {EjecucionesIndicadorComponent } from './pages/planificacion/ejecuciones-indicador/ejecuciones-indicador.component';
import {InformarIndicadorComponent} from './pages/planificacion/informar-indicador/informar-indicador.component';
import {VerEjecucionIndicadorComponent} from './pages/planificacion/ver-ejecucion-indicador/ver-ejecucion-indicador.component';
import {EditarEjecucionIndicadorComponent} from './pages/planificacion/editar-ejecucion-indicador/editar-ejecucion-indicador.component';
import {UnidadesOrganizativasVaciaComponent} from './pages/organizacion/unidades-organizativas-vacia/unidades-organizativas-vacia.component';
import {UnidadOrganizativaRaizComponent} from './pages/organizacion/unidad-organizativa-raiz/unidad-organizativa-raiz.component';
import {UnidadOrganiSecunComponent} from './pages/organizacion/unidad-organi-secun/unidad-organi-secun.component';
import {ListaUsuariosComponent} from './pages/seguridad/lista-usuarios/lista-usuarios.component';
import {CreaUsuarioComponent} from './pages/seguridad/crea-usuario/crea-usuario.component';
import {EditarUsuarioComponent} from './pages/seguridad/editar-usuario/editar-usuario.component';
import {VerUsuarioComponent} from './pages/seguridad/ver-usuario/ver-usuario.component';

import { ListaPlanesEstrategicosComponent } from './pages/planificacion/lista-planes-estrategicos/lista-planes-estrategicos.component';
import { ListaObjetivosEstrategicosComponent } from './pages/planificacion/lista-objetivos-estrategicos/lista-objetivos-estrategicos.component';
import {ListaIniciativasComponent} from "./pages/planificacion/lista-iniciativas/lista-iniciativas.component";
import {ListaIndicadoresComponent} from "./pages/planificacion/lista-indicadores/lista-indicadores.component";
import {ListaPerspectivasComponent} from "./pages/planificacion/lista-perspectivas/lista-perspectivas.component";
import {CrearIniciativaComponent} from "./pages/planificacion/crear-iniciativa/crear-iniciativa.component";
import {CrearIndicadorComponent} from "./pages/planificacion/crear-indicador/crear-indicador.component";
import {EditarIniciativaComponent} from "./pages/planificacion/editar-iniciativa/editar-iniciativa.component";


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'ejemplo', component: EjemploComponent},
      {path: 'listaPlanesAnuales', component: ListaPlanesAnualesComponent},
      {path: 'iniciativasPlanAnual', component: IniciativasPlanAnualComponent},
      {path: 'listaActividades', component: ListaActividadesComponent},
      {path: 'listaActividades/crearActividad', component: CrearActividadComponent},
      {path: 'listaActividades/detalleActividad', component: VerDetalleActividadComponent},
      {path: 'listaActividades/editarActividad', component: EditarActividadComponent},
      {path: 'cierre', component: CierreComponent},
      {path: 'reportes', component: ReportesComponent},
      {path: 'seguimientoActividades', component: ListaActividadSegComponent},
      {path: 'seguimientoActividades/todas', component: ListaActividadSegTodasComponent},
      {path: 'ejecucionesActividad', component: EjecucionesActSegComponent},
      {path: 'ejecucionesActividad/ingresoEjecucion', component: IngresoEjecucionActSegComponent},
      {path: 'ejecucionesActividad/detalleEjecucion', component: DetalleEjecucionActSegComponent},
      {path: 'segumientoIndicadores', component: ListaSegIndicadoresComponent},
      {path: 'ejecucionesIndicador/:id', component: EjecucionesIndicadorComponent},
      {path: 'informaIndicador/:id', component: InformarIndicadorComponent},
      {path: 'verIndicadorEje/:id', component: VerEjecucionIndicadorComponent },
      {path: 'editarIndicadorEje/:id', component: EditarEjecucionIndicadorComponent },
      {path: 'unidadesVacias', component: UnidadesOrganizativasVaciaComponent},
      {path: 'unidadRaiz', component: UnidadOrganizativaRaizComponent},
      {path: 'unidadSecundaria', component: UnidadOrganiSecunComponent},
      {path: 'listaUsuario', component: ListaUsuariosComponent},
      {path: 'crearUsuario', component: CreaUsuarioComponent},
      {path: 'editarUsuario/:id', component: EditarUsuarioComponent},
      {path: 'verUsuario/:id', component: VerUsuarioComponent},

      {path: 'listaPlanesEstrategicos', component: ListaPlanesEstrategicosComponent},
      {path: 'listaPerspectivas', component: ListaPerspectivasComponent},
      {path: 'listaObjetivosEstrategicos', component: ListaObjetivosEstrategicosComponent},
      {path: 'listaIniciativas', component: ListaIniciativasComponent},
      {path: 'listaIniciativas/crearIniciativa', component: CrearIniciativaComponent},
      {path: 'listaIniciativas/editarIniciativa', component: EditarIniciativaComponent},
      {path: 'listaIndicadores', component: ListaIndicadoresComponent},
      {path: 'listaIndicadores/crearIndicador', component: CrearIndicadorComponent},
      {path: 'listaIndicadores/editarIndicador', component: EditarIndicadorComponent},

      /*{path: 'setup', loadChildren: () => import('./components/setup/setup.module').then(m => m.SetupModule)},
      {path: 'theming', loadChildren: () => import('./components/theming/theming.module').then(m => m.ThemingModule)},
      {path: 'icons', loadChildren: () => import('./components/icons/icons.module').then(m => m.IconsModule)},*/

    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
