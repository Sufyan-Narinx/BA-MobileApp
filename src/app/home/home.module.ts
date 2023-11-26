// Importe le module NgModule depuis Angular Core.
import { NgModule } from '@angular/core';

// Importe d'autres modules nécessaires depuis Angular.
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Importe la composante HomePage depuis le fichier './home.page'.
import { HomePage } from './home.page';

// Importe le module de routage HomePageRoutingModule depuis './home-routing.module'.
import { HomePageRoutingModule } from './home-routing.module';

// Définit un module Angular pour la page HomePage.
@NgModule({
  // Importe les modules nécessaires pour ce module.
  imports: [
    CommonModule, // Fournit des directives structurelles (comme *ngIf) et d'autres utilitaires.
    FormsModule, // Fournit la prise en charge des formulaires dans l'application.
    IonicModule, // Intègre le framework Ionic pour la création d'interfaces utilisateur.
    HomePageRoutingModule // Importe le module de routage pour la page HomePage.
  ],
  
  // Déclare la composante HomePage comme étant utilisée dans ce module.
  declarations: [HomePage]
})
export class HomePageModule {}
