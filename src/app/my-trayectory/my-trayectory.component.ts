import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactIconsSvgModule } from '../svg-icons/contact-icons-svg.module';
import { TechnologiesSvgModule } from '../svg-icons/technologies-svg.module';
import { BulletsComponent } from './bullets/bullets.component';

@Component({
  selector: 'app-my-trayectory',
  standalone: true,
  imports: [CommonModule, RouterLink, TechnologiesSvgModule, ContactIconsSvgModule, BulletsComponent],
  templateUrl: './my-trayectory.component.html',
  styleUrls: ['./my-trayectory.component.scss'],
})
export class MyTrayectoryComponent implements OnInit, OnDestroy {
  @ViewChild('links')
  public linksContainer: ElementRef;

  public constructor(private readonly viewport: ViewportScroller) {}

  public ngOnInit(): void {
    // exception because of the sticky header
    this.viewport.setOffset([0, 70]);
  }

  public toggleNavigationBar() {
    this.linksContainer.nativeElement.classList.toggle('links--show');
  }

  public ngOnDestroy(): void {
    this.viewport.setOffset([0, 0]);
  }
}
