import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unidades-organizativas-vacia',
  templateUrl: './unidades-organizativas-vacia.component.html',
  styleUrls: ['./unidades-organizativas-vacia.component.css']
})
export class UnidadesOrganizativasVaciaComponent implements OnInit {

  display = false;
  estados: any[] = [];
  estado: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.estados = [
      {label: 'Activo', value: {id: 1, name: 'Activo'}},
      {label: 'Desactivado', value: {id: 2, name: 'Desactivado'}}
    ];
  }

  showDialog() {
    this.display = true;
  }
  closeDialog(){
    this.router.navigateByUrl('/unidadRaiz');
    this.display = false;
  }

}
