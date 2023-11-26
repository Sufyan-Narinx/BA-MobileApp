import { Component, OnInit } from '@angular/core';
import { Report, User } from 'src/app/data.model';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  reportList: Report[] = [];

  constructor(
    private dataService: DataService,
    private alertCtrl: AlertController
  ) { 
    this.dataService.getAllReport().subscribe(res => {
      console.log(res);
      this.reportList = res;
    })
  }

  async deleteMyReport(report: Report) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Voulez-vous vraiment supprimer ce Report?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Oui, Supprimer',
          handler: () => {
            this.dataService.deleteReport(report);
          }
        }
      ]
    })

    await alert.present();
  }
  

  ngOnInit() {
    console.log();
  }
}
