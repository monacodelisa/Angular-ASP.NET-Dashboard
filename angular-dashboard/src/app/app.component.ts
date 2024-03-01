import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dashboard';
  sidebarVisible: boolean = true;

  menuItems = [
    {
      name: 'Sales Volume',
      icon: 'sales',
      route: 'sales'
    },
    {
      name: 'Latest Orders',
      icon: 'orders',
      route: 'orders'
    },
    {
      name: 'System Health',
      icon: 'shopping_cart',
      route: 'health'
    }
  ]

  toggleSidenav() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
