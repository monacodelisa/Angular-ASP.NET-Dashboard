import { Routes } from '@angular/router';
import { HealthComponent } from './components/health/health.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SalesComponent } from './components/sales/sales.component';

export const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'health', component: HealthComponent },
  { path: '', redirectTo: 'sales', pathMatch: 'full' },
];
