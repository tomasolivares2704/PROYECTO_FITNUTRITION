import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {
  selectedTime: string = ''; // Aquí almacenaremos el tiempo seleccionado

  constructor() { }

  ngOnInit() {
  }

}
