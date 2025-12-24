import { NgFor, NgForOf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserSubscriptionService } from '../../Model/Services/user-subscription';
import { pipe } from 'rxjs';
import { DurationPipePipe } from "../../Model/Pipe/duration-pipe-pipe";

@Component({
  selector: 'app-user-subscription',
   standalone: true,
  imports: [FormsModule,NgFor ,DurationPipePipe],
  templateUrl: './user-subscription.html',
  styleUrl: './user-subscription.css',
})
export class UserSubscription {
 subscriptions = signal<any[]>([]);

  userName = '';
  plan = 'Monthly';
  price = ' ';
  startDate = '';

  addSubscription() {
    if (!this.userName || !this.startDate) return;

    this.subscriptions.update(s => [
      ...s,
      {
        userName: this.userName,
        plan: this.plan,
        price: this.price,
        startDate: this.startDate
      }
    ]);

    this.userName = '';
    this.plan = 'Monthly';
    this.price = ' ';
    this.startDate = '';
  }
}
