// report.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private db: AngularFireDatabase) { }

  submitReport(reportData: any): Promise<void> {
    // Ici, vous pouvez choisir la structure de votre choix pour stocker les données.
    // Par exemple, en supposant que vous ayez une collection 'reports' dans Firebase.
    const reportsRef = this.db.list('reports'); // Assurez-vous que 'reports' est le chemin de votre collection
    return reportsRef.push(reportData).then(() => { /* Rien à retourner ici */ });
  }

  // ... autres méthodes du service ...
}
