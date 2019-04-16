import { Component } from '@angular/core';
import { NavMenuService } from './services/nav-menu.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 7 Starter App';
  items: NbMenuItem[] = this.navMenuService['items'];

  constructor(public navMenuService: NavMenuService) { }
}
