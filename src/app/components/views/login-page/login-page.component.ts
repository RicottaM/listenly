import { Component, inject } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../../services/auth/auth.service'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavComponent, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  authService: AuthService = inject(AuthService)

  async login(): Promise<void> {
    await this.authService.login(this.applyForm.value.email ?? '', this.applyForm.value.password ?? '')
  }
}
