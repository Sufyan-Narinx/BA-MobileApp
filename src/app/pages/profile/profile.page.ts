import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};
  userId!: string;

  constructor(
    private authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore, // Injectez AngularFirestore ici
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        // Supposons que getUserData() retourne les données de l'utilisateur de Firestore
        this.authService.getUserData(user.uid).subscribe(userData => {
          this.user = userData;
        });
      }
    });
  }

  async updateProfile() {
    try {
      await this.afs.collection('users').doc(this.userId).update(this.user);
      this.presentAlert('Vos modifications ont été sauvegardées avec succès.');
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données :", error);
      this.presentAlert('Erreur lors de la mise à jour des données.');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

