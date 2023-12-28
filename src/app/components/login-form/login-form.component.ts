import { Component, inject } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  authService: AuthService = inject(AuthService)

  async login(): Promise<void> {
    await this.authService.login(this.applyForm.value.email ?? '', this.applyForm.value.password ?? '')
  }
}
