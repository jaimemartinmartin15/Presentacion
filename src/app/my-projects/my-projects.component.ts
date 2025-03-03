import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BoxCardComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { LIST_OF_PROJECTS } from './project';

@Component({
  standalone: true,
  selector: 'app-my-projects',
  imports: [CommonModule, BoxCardComponent],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  public myProjects = LIST_OF_PROJECTS;
}
