import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../interface/user-creation';

@Injectable({
  providedIn: 'root',
})
export class UserCreationService {
  private User$ = new BehaviorSubject<Users[]>([]);
  
  getUser(){
    return this.User$.asObservable();
  }
  addUser(User:Users){
    this.User$.next([...this.User$.value,User]);
  }
}
