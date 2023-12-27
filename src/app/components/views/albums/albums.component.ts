import { Component } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
  imports: [NavComponent],
})
export class AlbumsComponent {}
