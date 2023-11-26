import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Report } from 'src/app/data.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-make-report',
  templateUrl: './make-report.page.html',
  styleUrls: ['./make-report.page.scss'],
})
export class MakeReportPage implements OnInit {
  user: string = "Admin";
  new_report: any = {};
  reporting_date: string = this.dataService.getDateOfToday();

  constructor(private dataService: DataService, private router: Router) { }
  
  // Toasts

  public toastBtn = [
    {
      text: 'Check History',
      role: 'info',
      handler: () => {
        this.router.navigate(['/history'])
      }
    },
    {
      text: 'Dismiss',
      role: 'cancel'
    }
  ];

  public toastBtn2 = [
    {
      text: 'Dismiss',
      role: 'cancel'
    }
  ];

  isToastOpen = false;
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  isToastOpen2 = false;
  setOpen2(isOpen: boolean) {
    this.isToastOpen2 = isOpen;
  }

  // Creation de Report

  async createReport() {
    this.dataService.addReport({
      user_id: this.user,
      authority_id: "undefine",
      position: "X-Y from map",
      status_group: "pending-test",
      reporting_date: this.reporting_date,
      ...this.new_report // Ajoutez les propriétés du formulaire ici
    }).then(res => {
      console.log('report added successfully', res);
      this.setOpen(true);
    }).catch(error => {
      console.log('Error in adding report', error);
      this.setOpen2(true);
    })

    /*
    try {
      const response = await this.dataService.addReport({
        user_id: this.user,
        authority_id: "unknown",
        category: "categorie",
        picture_set: "URL",
        description: "text",
        description_is_private: false,
        position: "X-Y from map",
        reporting_date: "today",
        status_group: "pending"
      });
    } catch (error) {
      console.error('Error adding report:', error);
    }
    */
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Vous pouvez effectuer des opérations supplémentaires sur le fichier si nécessaire
      this.new_report.picture_set = file;
    }
  }

  // Typeahead 
  /*
  @ViewChild('modal', { static: true }) modal!: IonModal;

  selectedFruitsText = '0 Items';
  selectedFruits: string[] = [];

  fruits: Item[] = [
    { text: 'Apple', value: 'apple' },
    { text: 'Apricot', value: 'apricot' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blackberry', value: 'blackberry' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Cranberry', value: 'cranberry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Grapefruit', value: 'grapefruit' },
    { text: 'Guava', value: 'guava' },
    { text: 'Jackfruit', value: 'jackfruit' },
    { text: 'Lime', value: 'lime' },
    { text: 'Mango', value: 'mango' },
    { text: 'Nectarine', value: 'nectarine' },
    { text: 'Orange', value: 'orange' },
    { text: 'Papaya', value: 'papaya' },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Peach', value: 'peach' },
    { text: 'Pear', value: 'pear' },
    { text: 'Plantain', value: 'plantain' },
    { text: 'Plum', value: 'plum' },
    { text: 'Pineapple', value: 'pineapple' },
    { text: 'Pomegranate', value: 'pomegranate' },
    { text: 'Raspberry', value: 'raspberry' },
    { text: 'Strawberry', value: 'strawberry' },
  ];

  private formatData(data: string[]) {
    if (data.length === 1) {
      const fruit = this.fruits.find((fruit) => fruit.value === data[0]);
      return fruit.text;
    }

    return `${data.length} items`;
  }

  fruitSelectionChanged(fruits: string[]) {
    this.selectedFruits = fruits;
    this.selectedFruitsText = this.formatData(this.selectedFruits);
    this.modal.dismiss();
  }*/

  ngOnInit() {
    console.log();
  }

}
