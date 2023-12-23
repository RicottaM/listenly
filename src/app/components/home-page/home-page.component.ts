import { Component } from '@angular/core'
import { DescriptionComponent } from '../desctiption/description.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [DescriptionComponent],
})
export class HomePageComponent {}
