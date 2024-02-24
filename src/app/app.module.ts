import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MenuBarComponent,
    HomeComponent,
    HeaderCarouselComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
