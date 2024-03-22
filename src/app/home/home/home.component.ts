import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products = [
    {
      id: '1',
      imageUrl:
        'https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SR400,600_.jpg',
      title: 'Universal Travel Adapter',
      description:
        'rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)',
      rating: 4.5,
    },
    {
      id: '2',
      imageUrl:
        'https://m.media-amazon.com/images/I/31jBba7+ySL._AC_SR400,600_.jpg',
      title: 'Portable Charger Power Bank',
      description:
        'High-capacity portable phone charger with 20000mAh rechargeable battery power capacity adds 2-3 full charges to your smartphones and tablets.',
      rating: 3.8,
    },
    {
      id: '3',
      imageUrl:
        'https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SR400,600_.jpg',
      title: 'Wireless Bluetooth Headphones',
      description:
        'Over Ear Stereo Wireless Headset with Microphone and Volume Control Wireless and Wired Headphones for Cell Phone/TV/PC.',
      rating: 4.3,
    },
    {
      id: '4',
      imageUrl:
        'https://m.media-amazon.com/images/I/61dcESC7EoL._AC_UL320_.jpg',
      title: 'LED Desk Lamp',
      description:
        'Eye-caring Table Lamps, Dimmable Office Lamp with USB Charging Port, Touch Control, 5 Color Modes, White, 12W.',
      rating: 4.7,
    },
    {
      id: '5',
      imageUrl:
        'https://m.media-amazon.com/images/I/61G67XH86kL._AC_UL320_.jpg',
      title: 'Smart Water Bottle',
      description:
        'Tracks water intake & glows to remind you to stay hydrated. BPA free, 20oz - 600ml.',
      rating: 4.2,
    },
    {
      id: '6',
      imageUrl:
        'https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SR400,600_.jpg',
      title: 'Ergonomic Office Chair',
      description:
        'Mesh Chair with Lumbar Support, Adjustable Headrest and Armrests, Black.',
      rating: 4.4,
    },
    {
      id: '7',
      imageUrl:
        'https://m.media-amazon.com/images/I/81feGML0NAL._AC_UL320_.jpg',
      title: 'Yoga Mat',
      description:
        'Eco-Friendly Non-Slip Yoga Mat with Carrying Strap, 1/4 inch Thick, Ideal for Hot Yoga, Pilates, Fitness.',
      rating: 4.6,
    },
    {
      id: '8',
      imageUrl:
        'https://m.media-amazon.com/images/I/41D9NDiSzjL._AC_SR400,600_.jpg',
      title: 'Digital Kitchen Scale',
      description:
        'Stainless Steel Food Scale with LCD Display, 11lb/5kg, Silver.',
      rating: 4.9,
    },
    {
      id: '9',
      imageUrl:
        'https://m.media-amazon.com/images/I/51Zp71w1jiL._AC_UL320_.jpg',
      title: 'Electric Toothbrush',
      description:
        'Rechargeable Sonic Toothbrush with Smart Timer, 4 Brushing Modes, Whitening Toothbrush with 8 Brush Heads, Black.',
      rating: 3.1,
    },
  ];

  handleAddToCartEvent(productId: string) {
    console.log('Ok, I will add it to the cart', productId);
  }
}
