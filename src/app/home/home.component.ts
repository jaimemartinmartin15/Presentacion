import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactIconsSvgModule } from '../svg-icons/contact-icons-svg.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactIconsSvgModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
