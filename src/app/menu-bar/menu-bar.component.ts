import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'menu-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
  color: string = 'red';

  getStyle() {
    return {
      'background-color': 'red',
    };
  }
}
