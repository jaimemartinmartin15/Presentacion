import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BoxCardComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { LIST_OF_LEARNINGS } from './learning';

@Component({
  standalone: true,
  selector: 'app-learning',
  imports: [CommonModule, BoxCardComponent],
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent {
  public learnings = LIST_OF_LEARNINGS;
}
