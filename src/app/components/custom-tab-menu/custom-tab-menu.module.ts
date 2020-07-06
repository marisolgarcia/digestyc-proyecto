import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TabMenuModule } from 'primeng/tabmenu';

import { CustomTabMenuComponent } from './custom-tab-menu.component';

@NgModule({
	declarations: [
		CustomTabMenuComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		TabMenuModule,
	],
	exports: [
		CustomTabMenuComponent
	]
})
export class CustomTabMenuModule { }
