import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
