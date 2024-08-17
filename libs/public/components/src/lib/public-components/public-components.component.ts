import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-public-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-components.component.html',
  styleUrl: './public-components.component.css',
})
export class PublicComponentsComponent {}
