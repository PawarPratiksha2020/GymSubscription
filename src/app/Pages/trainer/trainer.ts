import { Component, signal } from '@angular/core';
import { UserTrainerServices } from '../../Model/Services/user-trainer';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { Highlight } from '../../Model/Directive/highlight';

@Component({
  selector: 'app-trainer',
   standalone: true,
  imports: [FormsModule,NgFor,Highlight,NgStyle,CommonModule],
  templateUrl: './trainer.html',
  styleUrl: './trainer.css',
})
export class Trainer {
   trainers = signal<any[]>([]);

  name = '';
  speciality = '';
  experience = '';

  addTrainer() {
    if (!this.name || !this.speciality) return;

    this.trainers.update(t => [
      ...t,
      {
        name: this.name,
        speciality: this.speciality,
        experience: this.experience
      }
    ]);

    this.name = '';
    this.speciality = '';
    this.experience = '';
  }
}
