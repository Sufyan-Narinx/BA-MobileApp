import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor() { }

  login() {
    // Ici, je crée la méthode "login()" qui sera appelée lorsque le formulaire de connexion est soumis.

    // À cet endroit, tu peux ajouter ta propre logique de connexion, par exemple, en envoyant les données du formulaire
    // à un service d'authentification ou en effectuant une requête HTTP pour vérifier les informations de connexion.

    // Pour l'exemple, je vais simplement afficher un message dans la console lorsque le bouton de connexion est cliqué.
    console.log('Connexion...');
  }
}
