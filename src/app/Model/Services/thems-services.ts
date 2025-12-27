import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemsServices {
   theme = signal<'light' | 'dark'>('dark');

  toggleTheme() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
    document.body.setAttribute('data-theme', this.theme());
  }
}
