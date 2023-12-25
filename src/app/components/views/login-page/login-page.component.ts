import { Component } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavComponent, RouterLink, RouterLinkActive],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
