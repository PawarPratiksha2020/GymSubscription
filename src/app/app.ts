import { Component, Pipe, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Dashboard } from './Pages/dashboard/dashboard';
import { UserCreation } from './Pages/user-creation/user-creation';
import { UserSubscription } from './Pages/user-subscription/user-subscription';
import { Trainer } from './Pages/trainer/trainer';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet,RouterLink,Dashboard,UserCreation,UserSubscription,Trainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gym-Sub-Management');
   
}
