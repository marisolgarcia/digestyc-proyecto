import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { CrearComponent } from './crear/crear.component';

import { SeguridadModule } from '../../../components/seguridad/seguridad.module';
import { EditarComponent } from './editar/editar.component'

@NgModule({
  declarations: [RolesComponent, CrearComponent, EditarComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule,
    ButtonModule,
    SeguridadModule
  ]
})
export class RolesModule { }
