import { Component } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { LoginFormComponent } from '../../login-form/login-form.component'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
