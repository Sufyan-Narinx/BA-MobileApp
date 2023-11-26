// J'importe les modules nécessaires depuis Angular.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// J'importe la page RegisterPage depuis le fichier './register.page'.
import { RegisterPage } from './register.page';

// Je définis un tableau de routes pour le module RegisterPageRoutingModule.
const routes: Routes = [
  {
    // Je définis le chemin de la route comme une chaîne vide,
    // ce qui signifie que cette route correspondra à la racine de l'URL.
    path: '',

    // J'associe la composante RegisterPage à cette route.
    component: RegisterPage
  }
];

// Je définis le module RegisterPageRoutingModule.
@NgModule({
  // J'importe le module RouterModule en utilisant les routes définies précédemment.
  imports: [RouterModule.forChild(routes)],

  // J'exporte le module RouterModule pour que d'autres modules puissent l'utiliser.
  exports: [RouterModule],
})
// Je termine la définition du module RegisterPageRoutingModule.
export class RegisterPageRoutingModule {}
