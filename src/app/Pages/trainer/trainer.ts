import { Component, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './trainer.html',
  styleUrls: ['./trainer.css']
})
export class Trainer {

  trainers = signal([
    { name: 'Rahul Patil', speciality: 'Strength Coach', experience: 5, age: 29 },
    { name: 'Sneha Deshmukh', speciality: 'Yoga Trainer', experience: 4, age: 26 },
    { name: 'Amit Verma', speciality: 'Cardio Expert', experience: 6, age: 31 },
    { name: 'Pooja Kulkarni', speciality: 'Zumba & Dance', experience: 3, age: 24 },
    { name: 'Rohan Mehta', speciality: 'CrossFit Coach', experience: 7, age: 33 }
  ]);

  selectedTrainer: any = null;

  selectTrainer(t:any){
    this.selectedTrainer = t;
  }
}
