import { Component, EventEmitter, Output, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ThemeService } from "src/app/services/theme.service";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [FormsModule, ToolbarModule, ButtonModule, InputSwitchModule],
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	checked: boolean = true;
	selectedTheme: string = "dark";
	themeService: ThemeService = inject(ThemeService);

	@Output() toggleSidenavEvent = new EventEmitter<void>();

	onThemeChange(theme: string): void {
		this.selectedTheme = theme;
		this.themeService.setTheme(theme);
	}

	toggleSidenav() {
		this.toggleSidenavEvent.emit();
	}
}
