import { Component, inject } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../../services/auth/auth.service'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { User } from '../../../models/user.model'

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  imports: [NavComponent, ReactiveFormsModule, RouterLink, RouterLinkActive],
})
export class SignUpComponent {
  applyForm = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Za-z0-9]+$/),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(20), Validators.required]),
    passwordRepeat: new FormControl(''),
  })

  authService: AuthService = inject(AuthService)

  async register(): Promise<void> {
    if (this.applyForm.valid) {
      if (this.applyForm.value.password === this.applyForm.value.passwordRepeat) {
        const userTaken = await this.authService.getUserByEmail(this.applyForm.value.email ?? '')

        if (userTaken) {
          console.error('Email already in use')
        } else {
          this.authService.addUser(
            this.applyForm.value.nickname ?? '',
            this.applyForm.value.email ?? '',
            this.applyForm.value.password ?? '',
          )
        }
      } else {
        console.error('Password mismatch')
      }
    } else {
      if (
        this.applyForm.get('nickname')?.hasError('minlength') ||
        this.applyForm.get('nickname')?.hasError('maxlength') ||
        this.applyForm.get('nickname')?.hasError('required')
      ) {
        console.error('Nickname must be between 3 and 15 characters')
      }

      if (this.applyForm.get('nickname')?.hasError('pattern')) {
        console.error('Nickname can only contain letters and numbers')
      }

      if (this.applyForm.get('email')?.hasError('required')) {
        console.error('Email required')
      }

      if (this.applyForm.get('email')?.hasError('email')) {
        console.error('Invalid email')
      }

      if (
        this.applyForm.get('password')?.hasError('minlength') ||
        this.applyForm.get('password')?.hasError('maxlength') ||
        this.applyForm.get('password')?.hasError('required')
      ) {
        console.error('Password must be between 8 and 20 characters')
      }
    }
  }
}