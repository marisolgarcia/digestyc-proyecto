import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';

import { TableModule } from 'primeng/table'

import { RolesComponent } from './roles.component';

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule
  ]
})
export class RolesModule { }
