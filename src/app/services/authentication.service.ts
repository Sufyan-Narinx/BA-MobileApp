import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth) {}

  // Inscription d'un nouvel utilisateur
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Connexion d'un utilisateur
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Déconnexion de l'utilisateur
  signOut() {
    return this.afAuth.signOut();
  }

  // Obtenir l'état de l'authentification de l'utilisateur
  getAuthState() {
    return this.afAuth.authState;
  }
}

