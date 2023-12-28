import { Component, inject } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../../services/auth/auth.service'
import { LoginFormComponent } from '../../login-form/login-form.component'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
