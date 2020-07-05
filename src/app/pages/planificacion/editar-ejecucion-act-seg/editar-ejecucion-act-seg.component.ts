import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


interface mes {
  name: string;
  code: string;
}

@Component({
  selector: 'app-editar-ejecucion-act-seg',
  templateUrl: './editar-ejecucion-act-seg.component.html',
  styleUrls: ['./editar-ejecucion-act-seg.component.css']
})
export class EditarEjecucionActSegComponent implements OnInit {

  //datos quemados
  meta= 60;
  acumulado= 30;

  mes: mes[];
  selectedMes: string ="Junio";

  //formControl para obtener el valor de lo ejecutado
  ejecutado = new FormControl('');

  //variable para almacenar el porcentaje de lo ejecutado
  value: number = 0;
  backgroundColor: any;
  maxFileSize = 10000000;
  contents: any = null;
  filename: string;

  constructor() {
    this.mes = [
      {name: 'Junio', code: '1'},
      {name: 'Febreo', code: '2'},
      {name: 'Marzo', code: '3'},
      {name: 'Abril', code: '4'},
      {name: 'Mayo', code: '5'},
      {name: 'Junio', code: '6'},
      {name: 'Julio', code: '7'},
      {name: 'Agosto', code: '8'},
      {name: 'Septiembre', code: '9'},
      {name: 'Octubre', code: '10'},
      {name: 'Noviembre', code: '11'},
      {name: 'Diciembre', code: '12'},
    ];
  }

  ngOnInit(): void {

    let interval = setInterval(() => {
            //Calcula el porcentaje con respecto a la meta
            this.value = (((this.acumulado + this.ejecutado.value)*100)/this.meta);

            console.log(this.value);
            //evalua el porcentaje y determina el color
            if(this.value < 50) {
              this.backgroundColor = 'background1';
            } else if (this.value >= 50 && this.value < 100) {
              this.backgroundColor = 'background2';
            } else if (this.value == 100) {
              this.backgroundColor = 'background3';
            } else if (this.value == 0) {
              this.backgroundColor = 'background4';
            }
        }, 2000);
   }

   public myUploader(event, form) {
    console.log('Reading file...');
    for (const file of event.files) {
      const dataset = this.readFile(file);
      console.log('onUpload: ', dataset);
    }
    form.clear();
  }

  private readFile(file: File) {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.contents = reader.result;
    };
    reader.readAsText(file);
    this.filename = file.name;
  }

}
