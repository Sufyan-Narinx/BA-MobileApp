import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private authService: AuthenticationService,
    public toastController: ToastController
  ) {}

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Erreur de connexion. Veuillez réessayer.',
      duration: 2000,
      color: 'danger', // Optionnel: change la couleur du toast pour les erreurs
      position: 'top'
    });
    toast.present();
  }

  login(form: NgForm) {
    this.authService.signIn(form.value.email, form.value.password)
      .then(res => {
        this.presentToast('Connexion réussie.');
        // Redirigez l'utilisateur ou effectuez d'autres actions de réussite ici
      })
      .catch(err => {
        this.presentErrorToast(); // Affichez le toast d'erreur si la connexion échoue
        // Gérer les erreurs de connexion ici, par exemple en affichant un autre toast
      });
  }
}

