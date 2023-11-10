// Importe la décoration Component depuis le module '@angular/core'.
import { Component } from '@angular/core';

// Définit une composante Angular.
@Component({
  // Le sélecteur HTML associé à cette composante.
  selector: 'app-home',

  // Le chemin vers le fichier HTML qui représente la vue de cette composante.
  templateUrl: 'home.page.html',

  // Le chemin vers le fichier de style (CSS ou SCSS) associé à cette composante.
  styleUrls: ['home.page.scss'],
})
// Définit la classe HomePage comme une composante Angular.
export class HomePage {

  // Constructeur de la classe HomePage.
  constructor() {}

}
