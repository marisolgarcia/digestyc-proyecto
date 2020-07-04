import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuenteFinanciamientoRoutingModule } from './fuente-financiamiento-routing.module';

import { FuenteFinanciamientoComponent } from './fuente-financiamiento.component';

@NgModule({
	declarations: [FuenteFinanciamientoComponent],
	imports: [
		CommonModule,
		FuenteFinanciamientoRoutingModule
	]
})
export class FuenteFinanciamientoModule { }
