import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  fontSize = 24;
}
