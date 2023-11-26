import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  prenom: string = ''; // Je déclare une variable pour le prénom
  nom: string = ''; // Je déclare une variable pour le nom
  email: string = ''; // Je déclare une variable pour l'e-mail
  motDePasse: string = ''; // Je déclare une variable pour le mot de passe
  adresse: string = ''; // Je déclare une variable pour l'adresse

  constructor() { }

  ngOnInit() {
    // La méthode ngOnInit est appelée lorsque la page est initialisée
  }

  register() {
    // La fonction register est appelée lorsque l'utilisateur soumet le formulaire
    // Je peux accéder aux valeurs entrées par l'utilisateur ici
    console.log('Prénom:', this.prenom);
    console.log('Nom:', this.nom);
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.motDePasse);
    console.log('Adresse:', this.adresse);

    
  }
}




