import { Component } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'

@Component({
  selector: 'app-recordings',
  standalone: true,
  templateUrl: './recordings.component.html',
  styleUrl: './recordings.component.css',
  imports: [NavComponent],
})
export class RecordingsComponent {}
