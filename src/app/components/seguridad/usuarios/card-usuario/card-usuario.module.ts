import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {CardModule} from 'primeng/card';

import { CardUsuarioComponent } from './card-usuario.component';



@NgModule({
  declarations: [CardUsuarioComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule
  ],
  exports: [CardUsuarioComponent]
})
export class CardUsuarioModule { }
