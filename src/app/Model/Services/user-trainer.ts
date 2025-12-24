import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trainer } from '../../Pages/trainer/trainer';
import { UserTrainer } from '../interface/user-trainer';

@Injectable({
  providedIn: 'root',
})
export class UserTrainerServices {
  private trainer$ =new BehaviorSubject<UserTrainer[]>([]);
  getTrainer(){
    return this.trainer$.asObservable();
  }

  addtrainer(train : UserTrainer){
    this.trainer$.next([...this.trainer$.value,train])
  }
  
}
