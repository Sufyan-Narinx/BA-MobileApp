// Importe les modules nécessaires depuis Angular pour la gestion des routes.
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Importe le garde de l'authentification depuis le fichier 'auth.guard'.
import { AuthGuard } from './guards/auth.guard';

// Importe le composant 'ProtectedComponent' depuis le fichier correct.
import { ProtectedComponent } from './protected/protected.component';

// Définit un tableau de routes pour l'application.
const routes: Routes = [
  // ... vos autres routes existantes ...

  // Route pour la page d'accueil chargée de manière asynchrone.
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // Redirige automatiquement l'utilisateur vers la page d'accueil lorsque l'URL est vide.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Route pour la page de connexion chargée de manière asynchrone.
  {
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  // Route pour la page 'accueil' chargée de manière asynchrone.
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilPageModule)
  },
  // Route pour la page d'inscription chargée de manière asynchrone.
  {
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  // Route pour la page protégée 'ProtectedComponent' avec le garde 'AuthGuard'.
  {
    path: 'protected-route',
    component: ProtectedComponent, // Assurez-vous que le composant est correctement importé.
    canActivate: [AuthGuard]
  },
  // Route pour la page de la carte 'MapComponent'.
  {
    path: 'googlemaps',
    loadChildren: () => import('./pages/googlemaps/googlemaps.module').then(m => m.GooglemapsPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  // Route pour la page de rapport 'ReportPage'.
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  // ... toutes les autres routes ...
];

@NgModule({
  // Configure le système de routage en utilisant les routes définies ci-dessus.
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  // Exporte le module de routage pour qu'il puisse être utilisé dans d'autres parties de l'application.
  exports: [RouterModule]
})
export class AppRoutingModule { }
