import { Routes } from '@angular/router';
import { UserCreation } from './Pages/user-creation/user-creation';
import { UserSubscription } from './Pages/user-subscription/user-subscription';
import { Trainer } from './Pages/trainer/trainer';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'User-Creation',
        pathMatch: 'full'
    },
{
    path: 'user-creation',
    loadComponent: () =>
        import('./Pages/user-creation/user-creation')
            .then(m => m.UserCreation)
},
{
    path: 'User-Subscription',
       loadComponent :() => 
        import('./Pages/user-subscription/user-subscription')
       .then(m=>m.UserSubscription)
},
{
    path: 'trainer',
    loadComponent :()=> import('./Pages/trainer/trainer').then(m=>m.Trainer)  
},
{
      path : 'dashboard',
      loadComponent:()=>import('./Pages/dashboard/dashboard').then(m => m.Dashboard)
}
   
    
];
