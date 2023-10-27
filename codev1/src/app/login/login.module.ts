// J'importe les modules nécessaires pour ma page de connexion
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

// Je crée un module Angular pour ma page de connexion
@NgModule({
  // J'importe les modules requis pour ma page
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  // Je déclare ma page de connexion en tant que composant
  declarations: [LoginPage]
})
export class LoginPageModule {} // Je rends ce module disponible pour mon application

