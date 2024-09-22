import { Component } from '@angular/core';
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonHeader,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    RouterModule,
  ], // Add RouterModule and IonButton
})
export class HomePage {
  constructor() {}
}
