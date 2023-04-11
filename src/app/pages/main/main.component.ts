import { Component } from '@angular/core';
import { Themes } from './themes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  currentTech: string = '';
  currentTheme: string = '';
  currentThemeContent: string = '';
  shouldShowLeftMenu: boolean = true;

  public setTech(tech: string): void {
    this.currentTech = tech;
  }

  public resetTech(): void {
    this.currentTech = '';
  }

  public getTechsNames(): string[] {
    // @ts-ignore
    return Object.keys(Themes);
  }

  public setTheme(theme: string): void {
    this.currentTheme = theme;
    // @ts-ignore
    this.currentThemeContent = Themes[this.currentTech]?.[this.currentTheme];
  }

  public getThemesNames(): string[] {
    // @ts-ignore
    return Object.keys(Themes[this.currentTech]);
  }

  public hideLeftMenu(): void {
    this.shouldShowLeftMenu = false;
  }
}
