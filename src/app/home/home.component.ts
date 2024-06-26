import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent, calculateCurrentAge, intervalArray } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { ContactIconsSvgModule } from '../svg-icons/contact-icons-svg.module';
import { rotateProfilePicture } from './home.animations';

const CHANGE_PICTURE_TIME = 15000; // 15 seconds
const ANIMATION_WAVE_TIME = 2000; // 2 seconds like in scss

// svg wave animation
const NUMBER_OF_WAVES_MOBILE = 8;
const NUMBER_OF_WAVES_DESKTOP = 20;
const VIEW_BOX_WIDHT_MOBILE = 100;
const VIEW_BOX_HEIGHT_MOBILE = 5;
const VIEW_BOX_WIDHT_DESKTOP = 600;
const VIEW_BOX_HEIGHT_DESKTOP = 10;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactIconsSvgModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [rotateProfilePicture],
})
export class HomeComponent implements OnInit {
  public years: number;

  // profile animation
  private profilePictureAnimationSubscription: ReturnType<typeof setTimeout>;
  public allowRotateProfilePicture = true;
  public stateRotateProfilePicture: 'showPhoto' | 'showLogo' = 'showPhoto';
  public profilePictureIndex = 0;
  public profilePictures: string[] = [
    'assets/home/profile.png',
    'assets/home/jame1.png',
    'assets/home/profile.png',
    'assets/home/jame2.png',
    'assets/home/profile.png',
    'assets/home/jame3.png',
    'assets/home/profile.png',
    'assets/home/jame4.png',
    'assets/home/profile.png',
    'assets/home/jame5.png',
  ];

  // wave animation
  public isMobileViewPort = !window.matchMedia('(min-width: 768px)').matches;
  private numberOfWaves = this.isMobileViewPort ? NUMBER_OF_WAVES_MOBILE : NUMBER_OF_WAVES_DESKTOP;
  public viewBoxWidth = this.isMobileViewPort ? VIEW_BOX_WIDHT_MOBILE : VIEW_BOX_WIDHT_DESKTOP;
  public viewBoxHeight = this.isMobileViewPort ? VIEW_BOX_HEIGHT_MOBILE : VIEW_BOX_HEIGHT_DESKTOP;
  public waveViewBox = `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`;
  public wavePath = '';

  // carousels
  public LEARN_TILES = [
    { link: '/comprende-rxjs', topic: 'Frontend', subtopic: 'RxJS', img: 'assets/home/frontendrxjscard.png' },
    { link: '/redes/dns', topic: 'Redes', subtopic: 'DNS', img: 'assets/home/redesdnscard.png' },
    { link: '/bases-de-datos/sql', topic: 'Bases de datos', subtopic: 'SQL', img: 'assets/home/basesdedatossqlcard.png' },
    {
      link: '/comandos',
      topic: 'Sistemas operativos',
      subtopic: 'Comandos',
      img: 'assets/home/sistemasoperativoscomandoscard.png',
    },
  ];

  public ngOnInit(): void {
    this.years = calculateCurrentAge(new Date(1996, 10, 15));

    this.calculateWavePath();
    this.scheduleWaveAnimation(0);
    this.scheduleProfilePictureAnimation();
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
      this.isMobileViewPort = !e.matches;
      if (this.isMobileViewPort) {
        this.viewBoxWidth = VIEW_BOX_WIDHT_MOBILE;
        this.viewBoxHeight = VIEW_BOX_HEIGHT_MOBILE;
        this.numberOfWaves = NUMBER_OF_WAVES_MOBILE;
      } else {
        this.viewBoxWidth = VIEW_BOX_WIDHT_DESKTOP;
        this.viewBoxHeight = VIEW_BOX_HEIGHT_DESKTOP;
        this.numberOfWaves = NUMBER_OF_WAVES_DESKTOP;
      }
      this.waveViewBox = `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`;
    });
  }

  private scheduleProfilePictureAnimation() {
    this.profilePictureAnimationSubscription = setTimeout(this.changeProfilePicture.bind(this), CHANGE_PICTURE_TIME);
  }

  public changeProfilePicture() {
    if (this.allowRotateProfilePicture) {
      this.allowRotateProfilePicture = false;

      // resets the timeout
      clearTimeout(this.profilePictureAnimationSubscription);
      this.scheduleProfilePictureAnimation();

      this.stateRotateProfilePicture = this.stateRotateProfilePicture === 'showLogo' ? 'showPhoto' : 'showLogo';
      setTimeout(() => {
        if (this.profilePictureIndex === this.profilePictures.length - 1) {
          this.profilePictureIndex = 0;
        } else {
          this.profilePictureIndex++;
        }
      }, 196);
    }
  }

  private scheduleWaveAnimation(timeout: number) {
    setTimeout(this.calculateWavePath.bind(this), timeout);
  }

  private calculateWavePath(): void {
    const waveSegmentWidth = this.viewBoxWidth / this.numberOfWaves;

    // 5 different height values
    const heightValues = intervalArray(5).map((v) => (this.viewBoxHeight / 4) * (v - 1));

    this.wavePath = `M0,0L0,${heightValues[Math.trunc(Math.random() * heightValues.length)]}C`;

    let initialPoint = heightValues[Math.trunc(Math.random() * heightValues.length)];
    this.wavePath += `${waveSegmentWidth / 2},${initialPoint} ${waveSegmentWidth / 2},${initialPoint}`;
    let previousPoint = initialPoint;

    let variation = 0;
    for (let i = 1; i < this.numberOfWaves; i++) {
      if (previousPoint == heightValues[0] || previousPoint == heightValues[1]) {
        variation = [heightValues[0], heightValues[1]][Math.trunc(Math.random() * 2)];
      }

      if (previousPoint == heightValues[2]) {
        variation = [-heightValues[1], heightValues[0], heightValues[1]][Math.trunc(Math.random() * 3)];
      }

      if (previousPoint == heightValues[3] || previousPoint == heightValues[4]) {
        variation = [-heightValues[1], heightValues[0]][Math.trunc(Math.random() * 2)];
      }

      this.wavePath += ` ${waveSegmentWidth * i},${previousPoint + variation}C${waveSegmentWidth * i + waveSegmentWidth / 2},${
        previousPoint + variation * 2
      } ${waveSegmentWidth * i + waveSegmentWidth / 2},${previousPoint + variation * 2}`;
      previousPoint = previousPoint + variation * 2;
    }
    this.wavePath += ` ${this.viewBoxWidth},${heightValues[Math.trunc(Math.random() * heightValues.length)]}L${this.viewBoxWidth},0z`;

    this.scheduleWaveAnimation(ANIMATION_WAVE_TIME);
  }
}
