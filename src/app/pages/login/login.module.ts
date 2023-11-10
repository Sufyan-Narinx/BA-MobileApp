// Importe les modules nécessaires depuis Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importe le module IonicModule depuis Ionic.
import { IonicModule } from '@ionic/angular';

// Importe le module de routage spécifique à LoginPage.
import { LoginPageRoutingModule } from './login-routing.module';

// Importe la composante LoginPage depuis le fichier './login.page'.
import { LoginPage } from './login.page';

// Définit un module Angular.
@NgModule({
  // Importe d'autres modules requis pour ce module.
  imports: [
    CommonModule,     // Fournit des directives Angular de base pour le DOM.
    FormsModule,      // Fournit des fonctionnalités de liaison de données.
    IonicModule,      // Fournit des composants d'interface utilisateur Ionic.
    LoginPageRoutingModule  // Utilisé pour configurer les routes de la page LoginPage.
  ],
  // Définit les composantes qui font partie de ce module.
  declarations: [LoginPage]
})
// Déclare la classe LoginPageModule en tant que module Angular.
export class LoginPageModule {}
