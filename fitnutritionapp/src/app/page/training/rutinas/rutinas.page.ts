import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {
  selectedTime: string = ''; // Aquí almacenaremos el tiempo seleccionado

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLunes(){
    this.router.navigate(['/training/rutinas/cardi-lunes'])
  }

}
