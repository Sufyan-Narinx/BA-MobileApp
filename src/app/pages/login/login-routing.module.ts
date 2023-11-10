// J'importe les modules nécessaires depuis Angular.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// J'importe la page LoginPage depuis le fichier './login.page'.
import { LoginPage } from './login.page';

// Je définis un tableau de routes pour le module LoginPageRoutingModule.
const routes: Routes = [
  {
    // Je définis le chemin de la route comme une chaîne vide,
    // ce qui signifie que cette route correspondra à la racine de l'URL.
    path: '',
    
    // J'associe la composante LoginPage à cette route.
    component: LoginPage
  }
];

// Je définis le module LoginPageRoutingModule.
@NgModule({
  // J'importe le module RouterModule en utilisant les routes définies précédemment.
  imports: [RouterModule.forChild(routes)],
  
  // J'exporte le module RouterModule pour que d'autres modules puissent l'utiliser.
  exports: [RouterModule],
})
// Je termine la définition du module LoginPageRoutingModule.
export class LoginPageRoutingModule {}
