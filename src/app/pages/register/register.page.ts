import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(private authService: AuthenticationService, private router: Router) {}

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const commune = form.value.commune;
    const role = form.value.role; // Le rôle récupéré depuis le formulaire

    // TODO: Assurez-vous de vérifier que les mots de passe entrés et confirmés correspondent avant d'envoyer
    // Exemple :
    // if (password !== form.value.confirmPassword) {
    //   console.error("Les mots de passe ne correspondent pas.");
    //   return;
    // }

    this.authService.signUp(email, password, role, firstName, lastName, commune)
      .then(() => {
        // Redirection après une inscription réussie
        this.router.navigate(['/home']);
      })
      .catch(err => {
        // Gestion des erreurs d'inscription
        console.error(err);
      });
  }
}
