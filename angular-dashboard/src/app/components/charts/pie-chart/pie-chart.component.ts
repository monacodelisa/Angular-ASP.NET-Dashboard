import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-pie-chart",
	templateUrl: "./pie-chart.component.html",
	styleUrls: ["./pie-chart.component.scss"],
})
export class PieChartComponent implements OnInit {
	data: any;
	options: any;

	ngOnInit() {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue("--text-color");

		this.data = {
			labels: ["A", "B", "C"],
			datasets: [
				{
					data: [330, 330, 330],
					backgroundColor: [
						documentStyle.getPropertyValue("--blue-700"),
						documentStyle.getPropertyValue("--yellow-500"),
						documentStyle.getPropertyValue("--green-500"),
					],
          borderColor: '#333',
					hoverBackgroundColor: [
						documentStyle.getPropertyValue("--blue-700"),
						documentStyle.getPropertyValue("--yellow-500"),
						documentStyle.getPropertyValue("--green-500"),
					],
				},
			],
		};

		this.options = {
      maintainAspectRatio: false,
			aspectRatio: 1.5,
			cutout: "60%",
			plugins: {
				legend: {
					labels: {
						color: textColor,
					},
				},
			},
		};
	}
}
