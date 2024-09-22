import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf
import {
  IonContent,
  IonItem,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
} from '@ionic/angular/standalone'; // Import Ionic components

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Import CommonModule for ngIf
    FormsModule, // Import FormsModule for ngModel
    IonContent,
    IonItem,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton, // Import IonButton for the delete button
  ],
})
export class InputCardComponent {
  inputValue: string = '';
  cardTexts: { text: string; isEditing: boolean }[] = []; // Object to hold text and editing state

  onEnter() {
    if (this.inputValue) {
      this.cardTexts.push({ text: this.inputValue, isEditing: false }); // Add new card text
      this.inputValue = ''; // Clear the input after adding
    }
  }

  deleteCard(index: number) {
    this.cardTexts.splice(index, 1); // Remove card by index
  }

  toggleEdit(index: number) {
    this.cardTexts[index].isEditing = !this.cardTexts[index].isEditing; // Toggle editing state
  }

  saveEdit(index: number) {
    this.cardTexts[index].isEditing = false; // Save changes and exit editing mode
  }
}
