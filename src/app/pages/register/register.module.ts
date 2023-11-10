// J'importe les modules nécessaires depuis Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// J'importe le module IonicModule depuis Ionic.
import { IonicModule } from '@ionic/angular';

// J'importe le module de routage pour la page d'inscription.
import { RegisterPageRoutingModule } from './register-routing.module';

// J'importe la composante RegisterPage depuis le fichier './register.page'.
import { RegisterPage } from './register.page';

// Je crée un module Angular nommé RegisterPageModule.
@NgModule({
  // J'inclus les modules nécessaires dans ce module.
  imports: [
    CommonModule, // Le module de base de CommonModule.
    FormsModule,  // Le module pour la gestion des formulaires.
    IonicModule,  // Le module d'intégration Ionic.
    RegisterPageRoutingModule // Le module de routage pour la page d'inscription.
  ],

  // Je déclare la composante RegisterPage comme faisant partie de ce module.
  declarations: [RegisterPage]
})
export class RegisterPageModule {} // Je termine la définition du module RegisterPageModule.
