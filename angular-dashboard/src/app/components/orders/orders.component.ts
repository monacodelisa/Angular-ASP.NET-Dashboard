import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "src/app/models/order";

interface Column {
	field: string;
	header: string;
}

@Component({
	selector: "app-orders",
	templateUrl: "./orders.component.html",
	styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
	cols: Column[] = [];
	orders: Order[] = [];
	http: HttpClient = inject(HttpClient);

	ngOnInit(): void {
		this.http.get<Order[]>("../../assets/orders.json").subscribe((data) => {
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
