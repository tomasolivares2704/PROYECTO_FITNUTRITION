import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardi-lunes',
  templateUrl: './cardi-lunes.page.html',
  styleUrls: ['./cardi-lunes.page.scss'],
})
export class CardiLunesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rutinas = [
    {
      name: 'Sprint Cortes',
      image: 'https://previews.123rf.com/images/sudowoodo/sudowoodo1708/sudowoodo170800039/84420552-atleta-corriendo-ilustraci%C3%B3n-vectorial-geom%C3%A9trica-estilizada-corredor-de-sprint-masculino-de.jpg',
      description:'30 Segundos + Descanso',
      principiante: ' Principiante 2 minutos de caminata para recuperar / 10 Minutos',
      intermedio: 'Intermedio 1 minutos de caminata para recuperar / 15 Minutos',
      avanzado: 'Avanzado 45 segundos de caminata para recuperar / 20 Minutos',
    },
    {
      name: 'Jumping Jacks',
      image: 'https://thumbs.dreamstime.com/b/hombre-haciendo-saltos-ejercicio-de-estrella-ilustraci%C3%B3n-vectorial-plana-aislada-en-fondo-blanco-221339056.jpg',
      description:'1 Minuto + Descanso',
      principiante: 'Principiante 1 minuto para recuperar / 10 Minutos',
      intermedio: 'Intermedio 45 segundos para recuperar / 15 Minutos',
      avanzado: 'Avanzado 30 segundos para recuperar / 20 Minutos ',
    },
    {
      name: ' High Knees',
      image: 'https://as1.ftcdn.net/v2/jpg/03/91/54/66/1000_F_391546665_TaGOpkp2ZYe8tV71r7IAxcqtE3nmyG6H.jpg',
      description:'30 Segundos + Descanso ',
      principiante: ' Principiante 2 minutos para recuperar / 10 Minutos',
      intermedio: 'Intermedio 1 minutos para recuperar / 15 Minutos',
      avanzado: 'Avanzado 45 segundos para recuperar / 20 Minutos',
    },
    {
      name: 'Push-Ups',
      image: 'https://media.istockphoto.com/id/1407656524/es/vector/hombre-haciendo-push-up-ilustraci%C3%B3n-vectorial-plana-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=djf8pG_Mu-SLIcqE4g1rcYsfOoh3n-wMtnewsvkYwH0=',
      description:'AMRAP ',
      principiante: '10 Repeticiones',
    },

  ]
}
