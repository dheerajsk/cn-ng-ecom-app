import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HeaderCarouselComponent } from './home/header-carousel/header-carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { MenuBarComponent } from './home/menu-bar/menu-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './shared/footer/footer.component';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HomeModule,
    CartModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
