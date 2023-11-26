import { Component, ViewChild, ElementRef} from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.page.html',
  styleUrls: ['./googlemaps.page.scss'],
})
export class GooglemapsPage  {

  @ViewChild('map')mapRef!: ElementRef;
  map!: GoogleMap;

  constructor(private modalCtrl: ModalController) { }

  async ionViewDidEnter() {
    this.map = await GoogleMap.create({
      id : 'my-map',
      apiKey:"AIzaSyC-uiZmqFHkHinBY8CnXNjK4_c5JXGtDUo" ,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: 50.85070037841797, 
          lng: 4.448941230773926,
        },
        zoom:8,
      }
    });
    await this.addMarkers();
    this.addMarkers();
  }

  async addMarkers(){
    const markers: Marker[] = [
      {
        coordinate: {
          lat: 50.85070037841797, 
          lng: 4.448941230773926,
        },
        title: 'Best Scrum School ever',
        snippet: 'joke',
      },
      {
        coordinate: {
          lat: 75,
          lng: -117,
        },
        title: 'random place',
        snippet: 'not sure',
      },
    ];
    const result = await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async(marker) => {
      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps:{
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
    });

  }
}
