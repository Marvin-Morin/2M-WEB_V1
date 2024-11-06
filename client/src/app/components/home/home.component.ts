import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: string[] = [
    '/img/diplomes/CCP5.png',
    '/img/diplomes/CCP2.png',
  ];

  currentIndex: number = 0;

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex += 1;
    }
  }

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
