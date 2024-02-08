import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  cols: Column[] = [];
  orders: Order[] = [];

  ngOnInit(): void {


    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'customer', header: 'Customer' },
      { field: 'total', header: 'Amount' },
      { field: 'placed', header: 'Order Placed' },
      { field: 'fulfilled', header: 'Order Placed' },
  ];
  }

}
