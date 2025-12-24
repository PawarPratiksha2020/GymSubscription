import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { Users } from '../../Model/interface/user-creation';
import { UserCreationService } from '../../Model/Services/user-creation';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-creation',
   standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './user-creation.html',
  styleUrl: './user-creation.css',
})
export class UserCreation {
   users = signal<any[]>([]);

  name = '';
  age = '';
  phone = '';
 currentWeight = '';
  gender = '';

  addUser() {
    if (!this.name || !this.age || !this.phone ||!this.currentWeight||!this.gender) return;

    this.users.update(u => [
      ...u,
      { name: this.name, age: this.age, phone: this.phone, currentWeight: this.currentWeight ,gender :this.gender}
    ]);

    this.name = '';
    this.age = '';
    this.phone = '';
    this.currentWeight = '';
    this.gender = '';
  }

}
