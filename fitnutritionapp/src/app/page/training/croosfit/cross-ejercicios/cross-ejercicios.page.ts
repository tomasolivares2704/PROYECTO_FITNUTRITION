import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-cross-ejercicios',
  templateUrl: './cross-ejercicios.page.html',
  styleUrls: ['./cross-ejercicios.page.scss'],
})
export class CrossEjerciciosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rutinas = [
    {
      name: 'Sentadillas Frontales',
      image: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/sentadilla-frontal-barra-elevacion-talones-init-pos-8577.png',
      description:'4 Series x 5 Repeticiones',
      principiante: 'Principiante Barra + 5lb x lado',
      intermedio: 'Intermedio Barra + 25lb x lado',
      avanzado: 'Avanzado Barra + 35lb x lado ',
    },
    {
      name: 'Press de Banca',
      image: 'https://media.istockphoto.com/id/1408266222/es/vector/hombre-haciendo-press-de-banca-con-barra-prensa-de-pecho-ilustraci%C3%B3n-vectorial-plana-aislada.jpg?s=612x612&w=0&k=20&c=tlFDD-LU9hovdw1tWWSB6T_BJF5h8U_pPhaD04jXAio=',
      description:'4 Series x 5 Repeticiones',
      principiante: 'Principiante Barra + 25lb x lado',
      intermedio: 'Intermedio Barra + 45lb x lado',
      avanzado: 'Avanzado Barra + 45lb + 25lb x lado ',
    },
    {
      name: 'Deadlifts',
      image: 'https://vitruve.fit/wp-content/uploads/2022/07/image2-11-1.png',
      description:'AMRAP ',
      principiante: '8 Repeticiones',
    },
    {
      name: 'Push-Ups',
      image: 'https://media.istockphoto.com/id/1407656524/es/vector/hombre-haciendo-push-up-ilustraci%C3%B3n-vectorial-plana-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=djf8pG_Mu-SLIcqE4g1rcYsfOoh3n-wMtnewsvkYwH0=',
      description:'AMRAP ',
      principiante: '10 Repeticiones',
    },
    {
      name: ' Saltos de Caja',
      image: 'https://previews.123rf.com/images/lioputra/lioputra2105/lioputra210500027/169820339-mujer-haciendo-ejercicio-de-salto-de-caja-alta-ilustraci%C3%B3n-de-vector-plano-aislado-sobre-fondo.jpg',
      description:'AMRAP ',
      principiante: '12 Repeticiones',
    },
    
    
    
    // Agrega más ejercicios según sea necesario
  ];

}
