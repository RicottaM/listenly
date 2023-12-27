import { Component } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  imports: [NavComponent],
})
export class SignUpComponent {}
