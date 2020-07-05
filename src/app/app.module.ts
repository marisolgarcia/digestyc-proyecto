import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import {PickListModule} from 'primeng/picklist';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { TabMenuModule } from 'primeng/tabmenu';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {InputSwitchModule} from 'primeng/inputswitch';

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
import { SubMenuSeguimientoComponent } from './components/sub-menu-seguimiento/sub-menu-seguimiento.component';
import { ListaSegIndicadoresComponent } from './pages/planificacion/lista-seg-indicadores/lista-seg-indicadores.component';
import { EjecucionesIndicadorComponent } from './pages/planificacion/ejecuciones-indicador/ejecuciones-indicador.component';
import { InformarIndicadorComponent } from './pages/planificacion/informar-indicador/informar-indicador.component';
import { VerEjecucionIndicadorComponent } from './pages/planificacion/ver-ejecucion-indicador/ver-ejecucion-indicador.component';
import { EditarEjecucionIndicadorComponent } from './pages/planificacion/editar-ejecucion-indicador/editar-ejecucion-indicador.component';
import { UnidadesOrganizativasVaciaComponent } from './pages/organizacion/unidades-organizativas-vacia/unidades-organizativas-vacia.component';
import { UnidadOrganizativaRaizComponent } from './pages/organizacion/unidad-organizativa-raiz/unidad-organizativa-raiz.component';
import { UnidadOrganiSecunComponent } from './pages/organizacion/unidad-organi-secun/unidad-organi-secun.component';
import { ListaUsuariosComponent } from './pages/seguridad/lista-usuarios/lista-usuarios.component';
import { CreaUsuarioComponent } from './pages/seguridad/crea-usuario/crea-usuario.component';
import { EditarUsuarioComponent } from './pages/seguridad/editar-usuario/editar-usuario.component';
import { VerUsuarioComponent } from './pages/seguridad/ver-usuario/ver-usuario.component';

import { ListaPlanesEstrategicosComponent } from './pages/planificacion/lista-planes-estrategicos/lista-planes-estrategicos.component';
import { ListaObjetivosEstrategicosComponent } from './pages/planificacion/lista-objetivos-estrategicos/lista-objetivos-estrategicos.component';
import { ListaIniciativasComponent } from './pages/planificacion/lista-iniciativas/lista-iniciativas.component';
import { ListaIndicadoresComponent } from './pages/planificacion/lista-indicadores/lista-indicadores.component';
import { TabmenuPlanEstrategicoComponent } from './components/tabmenu-plan-estrategico/tabmenu-plan-estrategico.component';
import { ListaPerspectivasComponent } from './pages/planificacion/lista-perspectivas/lista-perspectivas.component';
import { CrearIniciativaComponent } from './pages/planificacion/crear-iniciativa/crear-iniciativa.component';
import { CrearIndicadorComponent } from './pages/planificacion/crear-indicador/crear-indicador.component';
import { EditarIniciativaComponent } from './pages/planificacion/editar-iniciativa/editar-iniciativa.component';
import { SmPlanAnualComponent } from './components/sm-plan-anual/sm-plan-anual.component';
import { EditarEjecucionActSegComponent } from './pages/planificacion/editar-ejecucion-act-seg/editar-ejecucion-act-seg.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EjemploComponent,
    EditarIndicadorComponent,
    ListaPlanesAnualesComponent,
    IniciativasPlanAnualComponent,
    ListaActividadesComponent,
    CrearActividadComponent,
    VerDetalleActividadComponent,
    EditarActividadComponent,
    CierreComponent,
    ReportesComponent,
    ListaActividadSegComponent,
    ListaActividadSegTodasComponent,
    EjecucionesActSegComponent,
    IngresoEjecucionActSegComponent,
    DetalleEjecucionActSegComponent,
    SubMenuSeguimientoComponent,
    ListaSegIndicadoresComponent,
    EjecucionesIndicadorComponent,
    InformarIndicadorComponent,
    VerEjecucionIndicadorComponent,
    EditarEjecucionIndicadorComponent,
    UnidadesOrganizativasVaciaComponent,
    UnidadOrganizativaRaizComponent,
    UnidadOrganiSecunComponent,
    ListaUsuariosComponent,
    CreaUsuarioComponent,
    EditarUsuarioComponent,
    VerUsuarioComponent,
    ListaPlanesEstrategicosComponent,
    ListaObjetivosEstrategicosComponent,
    ListaIniciativasComponent,
    ListaIndicadoresComponent,
    TabmenuPlanEstrategicoComponent,
    ListaPerspectivasComponent,
    CrearIniciativaComponent,
    CrearIndicadorComponent,
    EditarIniciativaComponent,
    SmPlanAnualComponent,
    EditarEjecucionActSegComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    PanelMenuModule,
    SidebarModule,
    CardModule,
    DropdownModule,
    BreadcrumbModule,
    TabMenuModule,
    DialogModule,
    FormsModule,
    CalendarModule,
    TableModule,
    ProgressBarModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    MessagesModule,
    ReactiveFormsModule,
    InputNumberModule,
    CheckboxModule,
    AccordionModule,
    PickListModule,
    ToastModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
