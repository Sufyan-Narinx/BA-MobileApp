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
    this.authService.signUp(form.value.email, form.value.password)
      .then(res => {
        // Redirection après une inscription réussie
        this.router.navigate(['/home']); // Assurez-vous que le chemin est correct
      })
      .catch(err => {
        // Gestion des erreurs d'inscription
      });
  }
}

