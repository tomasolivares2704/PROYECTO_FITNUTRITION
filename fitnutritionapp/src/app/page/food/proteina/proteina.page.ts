import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-proteina',
  templateUrl: './proteina.page.html',
  styleUrls: ['./proteina.page.scss'],
})
export class ProteinaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  comidas = [
  {
    name: 'Sartén De Pollo Y Pimientos',
    imagen: 'https://www.primaverakitchen.com/wp-content/uploads/2019/03/Chicken-and-Bell-Peppers-Skillet-Primavera-Kitchen-2.jpg',
    nutrientes: 'Porción: Calorías: 258 kcal (13%) Carbohidratos: 9 g (3%) Proteínas: 18 g (36 %) Grasas: 18 g (28 %) Grasas saturadas: 5 g (31 %) Grasas poliinsaturadas: 1 g Grasas monoinsaturadas: 3 g',
    descripcion: 'La sartén de pollo y pimientos morrones es uno de esos platos que se incluirán en la cena familiar porque resulta que agrada a todos. Está sazonado con muchas especias y también es bajo en carbohidratos, paleo y apto para alimentos integrales. ',
  },
  {
    name: 'Salmón Braseado',
    imagen: 'https://www.primaverakitchen.com/wp-content/uploads/2020/08/Pan-Seared-Salmon-Recipe-Primavera-Kitchen-7-1024x1536.jpg',
    nutrientes: 'Porción: 1/4 Calorías: 253 kcal (13%) Proteínas: 26 g (52%) Grasas: 16 g ( 25%) Grasas saturadas: 7 g (44%) Grasas monoinsaturadas: 2 g',
    descripcion: 'Esta  receta de salmón braseado es una cena saludable, rápida y fácil entre semana. ¡Prepara esta comida saludable en menos de 15 minutos y con solo cuatro ingredientes! ¡La mejor receta de salmón braseado jamás vista!',
  },
  {
    name: 'Ensalada De Salmón Picado',
    imagen: 'https://www.primaverakitchen.com/wp-content/uploads/2020/01/Easy-Chopped-Salmon-Salad-Primavera-Kitchen-1-1024x1536.jpg',
    nutrientes: 'Porción: 1/4 Calorías: 296 kcal (15%) Carbohidratos: 15 g (5%) Proteínas: 15 g (30%) Grasas : 21 g (32%) Grasas saturadas: 4 g (25%) Grasas poliinsaturadas: 2 g Grasa monoinsaturada: 11 g Colesterol: 28 mg (9%)',
    descripcion: 'Esta receta de ensalada de salmón es un plato principal con verduras picadas, pescado desmenuzado y aderezo cítrico picante. Tiene muchas proteínas y grasas saludables, ¡por lo que es nutritivo y delicioso! ¡Prepare esto para la cena de esta noche como preparación para el almuerzo de la semana!',
  },
  





  ]
    

  

}
