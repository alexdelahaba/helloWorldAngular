import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  mostrar = true;

  frase: any = {
    mensaje: 'Tengo mucha barba',
    autor: 'Benjamin Franklin',
  };

  personajes: string[] = [
    'yo',
    'tú',
    'él/ella',
    'nosotros',
    'vosotros',
    'ellos/as',
  ];

  constructor() {}

  ngOnInit(): void {}
}
