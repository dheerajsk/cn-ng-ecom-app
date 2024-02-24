import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    MenuBarComponent,
    HeaderCarouselComponent,
  ],
  imports: [CommonModule, HeaderComponent, FooterComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
