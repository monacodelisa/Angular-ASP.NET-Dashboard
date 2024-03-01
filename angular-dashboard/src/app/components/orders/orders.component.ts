import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "src/app/models/order";

import { TableModule } from 'primeng/table';
import { DatePipe } from "@angular/common";


interface Column {
	field: string;
	header: string;
}

@Component({
	selector: "app-orders",
  standalone: true,
  imports: [TableModule, DatePipe],
	templateUrl: "./orders.component.html",
	styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
	cols: Column[] = [];
	orders: Order[] = [];
	http: HttpClient = inject(HttpClient);

	ngOnInit(): void {
		this.http.get<Order[]>("../../assets/orders.json").subscribe((data: Order[]) => {
			this.orders = data;
		});

		this.cols = [
			{ field: "id", header: "ID" },
			{ field: "customer", header: "Customer" },
			{ field: "total", header: "Amount" },
			{ field: "placed", header: "Order Placed" },
			{ field: "fulfilled", header: "Order Placed" },
		];
	}

  getTopLevelProperties(obj: any): string[] {
    return Object.keys(obj);
  }
}
