import { Component } from '@angular/core'
import { DescriptionComponent } from '../../desctiption/description.component'
import { NavComponent } from '../../nav/nav.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [DescriptionComponent, NavComponent],
})
export class HomePageComponent {}
