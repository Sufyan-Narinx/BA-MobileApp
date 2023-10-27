// J'importe les modules nécessaires depuis Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// J'importe IonicModule depuis Ionic pour avoir accès aux composants Ionic
import { IonicModule } from '@ionic/angular';

// J'importe le module de routage de la page d'inscription
import { RegisterPageRoutingModule } from './register-routing.module';

// J'importe la classe du composant de la page d'inscription
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    // J'importe et configure les modules nécessaires pour cette page
    CommonModule,
    FormsModule,
    IonicModule, // J'ajoute cette ligne pour activer les fonctionnalités Ionic
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}


