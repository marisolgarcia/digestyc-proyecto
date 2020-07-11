import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReportesComponent } from './reportes.component';

@NgModule({
	declarations: [
		ReportesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReporteRoutingModule,
		DropdownModule,
		DialogModule,
		CardModule,
		ButtonModule,
	]
})
export class ReporteModule { }
