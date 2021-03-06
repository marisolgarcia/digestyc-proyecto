import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input('usuario')
  usuario: any;

  @Input('mostrarBoton')
  mostrarBoton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
