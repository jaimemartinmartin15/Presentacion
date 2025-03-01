import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestoreScrollService, SeoService, TopNavigationComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,   TopNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public constructor(readonly seoService: SeoService, readonly restoreScrollService: RestoreScrollService) {
    seoService.listenNavigationEvents();
    restoreScrollService.listenScrollRestoration();
  }
}
