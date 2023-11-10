// Importe les modules nécessaires depuis Angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Importe les modules d'AngularFire pour la gestion de l'authentification.
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Importe la configuration d'environnement depuis le fichier 'environment'.
import { environment } from '../environments/environment';

// Importe les modules d'Ionic pour l'interface utilisateur.
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Importe le composant racine de l'application.
import { AppComponent } from './app.component';

// Importe le module de routage de l'application.
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // Déclare le composant racine de l'application.
  declarations: [AppComponent],
  
  // Importe les modules nécessaires.
  imports: [
    BrowserModule,  // Module de base pour la prise en charge du navigateur.
    IonicModule.forRoot(), // Module Ionic pour la création d'interfaces utilisateur.
    AppRoutingModule, // Module de routage de l'application.
    AngularFireModule.initializeApp(environment.firebaseConfig), // Module AngularFire pour Firebase.
    AngularFireAuthModule, // Module AngularFire pour l'authentification.
  ],

  // Fournit la stratégie de réutilisation des routes.
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],

  // Définit le composant racine de l'application.
  bootstrap: [AppComponent],
})
export class AppModule {}
