import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Report, User } from '../data.model';

import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private reportList: Report[] = [
    {
      report_id: "R-001",
      user_id: "U-001",
      authority_id: "A-001",
      category: "Cat_test",
      picture_set: "URL",
      description: "Lorem Ipsum",
      description_is_private: false,
      position: "pos_test",
      reporting_date: "01-01-23",
      status_group: "S-001",
    },
    {
      report_id: "R-002",
      user_id: "U-002",
      authority_id: "A-002",
      category: "Cat_test",
      picture_set: "URL",
      description: "Lorem Ipsum dolor sit amet",
      description_is_private: false,
      position: "position_test-2",
      reporting_date: "02-02-23",
      status_group: "S-002",
    },
  ];
  

  constructor(private firestore: Firestore) { }

  // Report Function

  getAllReport(): Observable<Report[]> {
    const refReports = collection(this.firestore, 'reports');
    return collectionData(refReports, {idField: 'report_id'}) as Observable<Report[]>;
  }

  getReportById(reportId: any): Observable<Report> {
    const docRefReport = doc(this.firestore, `reports/${reportId}`);
    return docData(docRefReport, {idField: 'report_id'}) as Observable<Report>;
  }

  addReport(new_report: Report) {
    const refReport = collection(this.firestore, 'reports');
    return addDoc(refReport, new_report);
  }

  deleteReport(report: Report){
    const docRefReport = doc(this.firestore, `reports/${report.report_id}`);
    return deleteDoc(docRefReport);
  }

  updateReport(report: Report){
    const docRefReport = doc(this.firestore, `reports/${report.report_id}`);
    return updateDoc(docRefReport, {
      user_id: report.user_id,
      authority_id: report.authority_id,
      category: report.category,
      picture_set: report.picture_set,
      description: report.description,
      description_is_private: report.description_is_private,
      position: report.position,
      status_group: report.status_group
    })
  }

  // General Function
  
  getDateOfToday() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Notez que les mois sont indexés de 0 à 11, donc ajoutez 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const fullDateTime = currentDate.toISOString(); // au format ISO
    const fullDateTimeOfReturn = formattedDate + " " + formattedTime;
    return fullDateTimeOfReturn;
  }
}
