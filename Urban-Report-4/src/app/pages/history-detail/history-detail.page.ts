import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Report, User } from 'src/app/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {
  
  myReport: Observable<Report> = new Observable<Report>;
  /*
  myReport: Report = 
  {
    report_id: "",
    user_id: "",
    authority_id: "",
    category: "",
    picture_set: "",
    description: "",
    description_is_private: false,
    position: "",
    reporting_date: "",
    status_group: "",
  };
  */

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('reportId')) {
        return;
      }
      const reportId = paramMap.get('reportId');
      this.myReport = this.dataService.getReportById(reportId); // as Observable<Report>;
      console.log(this.myReport);
    })
  }

}
