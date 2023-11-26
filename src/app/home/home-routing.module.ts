// Importe les modules nécessaires depuis Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe la page HomePage depuis le fichier './home.page'.
import { HomePage } from './home.page';

// Définit un tableau de routes pour le module HomePageRoutingModule.
const routes: Routes = [
  {
    // Définit le chemin de la route comme une chaîne vide,
    // ce qui signifie que cette route correspondra à la racine de l'URL.
    path: '',
    
    // Associe la composante HomePage à cette route.
    component: HomePage,
  }
];

// Définit le module HomePageRoutingModule.
@NgModule({
  // Importe le module RouterModule en utilisant les routes définies précédemment.
  imports: [RouterModule.forChild(routes)],
  
  // Exporte le module RouterModule pour que d'autres modules puissent l'utiliser.
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

