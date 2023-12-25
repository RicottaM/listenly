import { Component } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
