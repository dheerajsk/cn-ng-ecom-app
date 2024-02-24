import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './home/menu-bar/menu-bar.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderCarouselComponent } from './home/header-carousel/header-carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecom-app';
}
