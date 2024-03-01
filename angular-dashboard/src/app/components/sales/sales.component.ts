import { Component } from "@angular/core";

import { CardModule } from "primeng/card";
import { BarChartComponent } from "../charts/bar-chart/bar-chart.component";
import { PieChartComponent } from "../charts/pie-chart/pie-chart.component";
import { LineChartComponent } from "../charts/line-chart/line-chart.component";

@Component({
	selector: "app-sales",
	standalone: true,
	imports: [
		BarChartComponent,
		PieChartComponent,
		LineChartComponent,
		CardModule,
	],
	templateUrl: "./sales.component.html",
	styleUrls: ["./sales.component.scss"],
})
export class SalesComponent {}
