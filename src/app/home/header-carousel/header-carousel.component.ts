import { Component } from '@angular/core';

@Component({
  selector: 'header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrl: './header-carousel.component.css',
})
export class HeaderCarouselComponent {
  urls: string[] = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/citi/pc_2x._CB584618827_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/February/Unrec/PC_3000_4._CB581367587_.jpg',
  ];
}
