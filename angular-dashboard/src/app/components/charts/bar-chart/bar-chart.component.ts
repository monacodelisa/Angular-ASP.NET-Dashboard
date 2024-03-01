import { Component, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';

@Component({
	selector: "app-bar-chart",
  standalone: true,
  imports: [ChartModule],
	templateUrl: "./bar-chart.component.html",
	styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit {
	data: any;
	options: any;

	ngOnInit() {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue("--text-color");
		const textColorSecondary = documentStyle.getPropertyValue(
			"--text-color-secondary"
		);
		const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

		this.data = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "My Second dataset",
					backgroundColor: '#ab545d',
					borderColor: documentStyle.getPropertyValue("--teal-500"),
					data: [28, 48, 40, 19, 86, 27, 90],
				}
			],
		};

		this.options = {
			maintainAspectRatio: false,
			aspectRatio: 1.5,
			plugins: {
				legend: {
					labels: {
						color: textColor,
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
						font: {
							weight: 500,
						},
					},
					grid: {
						color: surfaceBorder,
						drawBorder: false,
					},
				},
				y: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
						drawBorder: false,
					},
				},
			},
		};
	}
}
