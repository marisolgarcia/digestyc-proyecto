import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString'
})
export class TrimStringPipe implements PipeTransform {

	transform(texto: string): string {
		let maxLenght = 35;
		if(texto.length > maxLenght)
			texto = texto.substring(0, maxLenght) + "..."
		return texto;
	}

}
