import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
navigateToMenuItem(arg0: string) {
throw new Error('Method not implemented.');
}
  userRole: string | null = null;

  // Fusionnez les deux constructeurs en un seul en ajoutant tous les services injectés
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  goToReport() {
    console.log("Le bouton Signaler a été cliqué");
    this.router.navigateByUrl('/report'); // Assurez-vous que le chemin correspond à votre route de profil
  }
  goToManageReports() {
    this.router.navigateByUrl('/manage-reports');
  }
  // Cette méthode reste inchangée
  goToProfile() {
    this.router.navigateByUrl('/profile'); // Assurez-vous que le chemin correspond à votre route de profil
  }

  // La méthode ngOnInit reste inchangée également
  ngOnInit() {
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        this.authService.fetchAndSetUserRole(user.uid);
      }
    });

    this.authService.getCurrentUserRole().subscribe(role => {
      this.userRole = role;
    });
  }

  goTo(page: string) {
    // Utilisez le Router pour naviguer vers la page indiquée
    this.router.navigateByUrl(`/${page}`);
  }

  

}

