import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRatingComponent } from './product-rating/product-rating.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    MenuBarComponent,
    HeaderCarouselComponent,
    ProductRatingComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
