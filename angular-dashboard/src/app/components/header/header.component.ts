import { Component, EventEmitter, Output, inject } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  checked: boolean = true;
  selectedTheme: string = "dark";
  themeService: ThemeService= inject(ThemeService);

  @Output() toggleSidenavEvent = new EventEmitter<void>();

  onThemeChange(theme: string): void {
		this.selectedTheme = theme;
		this.themeService.setTheme(theme);
	}

  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }

}
