import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { CrearComponent } from './crear/crear.component';

import { SeguridadModule } from '../../../components/seguridad/seguridad.module'

@NgModule({
  declarations: [RolesComponent, CrearComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule,
    SeguridadModule
  ]
})
export class RolesModule { }
