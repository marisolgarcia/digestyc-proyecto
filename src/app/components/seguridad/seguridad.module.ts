import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRolComponent } from './roles/form-rol/form-rol.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PickListModule } from 'primeng/picklist';


@NgModule({
  declarations: [FormRolComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    PickListModule
  ],
  exports:[
  	FormRolComponent,
  ]
})
export class SeguridadModule { }
