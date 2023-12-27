import { Component } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'

@Component({
  selector: 'app-playlists',
  standalone: true,
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css',
  imports: [NavComponent],
})
export class PlaylistsComponent {}
