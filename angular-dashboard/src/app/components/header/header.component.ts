import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined;

	ngOnInit(): void {
		this.items = [
			{
				label: "Update",
				icon: "pi pi-refresh",
			},
			{
				label: "Delete",
				icon: "pi pi-times",
			},
			{
				label: "Angular",
				icon: "pi pi-external-link",
				url: "http://angular.io",
			},
			{
				label: "Router",
				icon: "pi pi-upload",
				routerLink: "/fileupload",
			},
		];
	}
}
