import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PickListModule } from 'primeng/picklist';


import { RolesComponent } from './roles.component';
import { CrearComponent } from './crear/crear.component';

@NgModule({
  declarations: [RolesComponent, CrearComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    PickListModule
  ]
})
export class RolesModule { }
