import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage {
  reportData = {
    category: '', // supposant que la catégorie est une chaîne
    description: '',
    location: { lat: null, lng: null }, // définir un objet avec les propriétés lat et lng
    photo: ''
  };

  constructor(
    private reportService: ReportService, // Injection du service
    // ... autres services injectés si nécessaire ...
  ) { }

  // ... vos autres méthodes et lifecycle hooks ...

  async submitReport() {
    // Votre logique de soumission de rapport ici
    try {
      await this.getCurrentPosition();
      await this.reportService.submitReport(this.reportData);
      alert('Signalement envoyé avec succès !');
    } catch (error) {
      alert('Erreur lors de l\'envoi du signalement : ' + error);
    }
  }

  private async getCurrentPosition() {
    // Implémentez la logique pour obtenir la position géographique actuelle
    // Cette méthode doit retourner une promesse qui résout les coordonnées ou rejette une erreur
  }

  // ... reste du code ...
}
