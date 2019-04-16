import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/',
      icon: 'nb-home'
    }
  ];

  constructor() { }
}
