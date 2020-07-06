import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimStringPipe } from './trim-string.pipe';



@NgModule({
	declarations: [TrimStringPipe],
	imports: [
		CommonModule
	],
	exports: [TrimStringPipe]
})
export class PipesModule { }
