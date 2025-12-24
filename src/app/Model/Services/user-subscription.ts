import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserSubscription } from '../interface/user-subscription';

@Injectable({
  providedIn: 'root',
})
export class UserSubscriptionService {
  private UserSub$ = new BehaviorSubject<UserSubscription[]>([]);

  getUserSub(){
    return this.UserSub$.asObservable();
  }
  AddUserSub(sub: UserSubscription){
    this.UserSub$.next([...this.UserSub$.value,sub])
  }
  
}
