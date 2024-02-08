import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebarVisible!: boolean;

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
}
