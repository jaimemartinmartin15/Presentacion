import { Component } from '@angular/core';
import { calculateCurrentAge } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  standalone: true,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent   {
  public years = calculateCurrentAge(new Date(1996, 10, 15));
}
