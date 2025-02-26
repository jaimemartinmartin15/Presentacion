import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RestoreScrollService, SeoService } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { BurgerSvgComponent } from './svg-icons/burger.component';
import { JameLogoSvgComponent } from './svg-icons/jame-logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, JameLogoSvgComponent, BurgerSvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public constructor(readonly seoService: SeoService, readonly restoreScrollService: RestoreScrollService) {
    seoService.listenNavigationEvents();
    restoreScrollService.listenScrollRestoration();
  }

  public toggleMenu(divEl: HTMLDivElement) {
    divEl.classList.toggle('collapsible-links--collapsed')
  }
}
