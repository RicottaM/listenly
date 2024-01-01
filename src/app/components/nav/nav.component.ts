import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthService } from '../../services/auth/auth.service'
import { CommonModule } from '@angular/common'
import { User } from '../../models/user.model'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  authService: AuthService = inject(AuthService)
  userName: string | null = null

  constructor(private cookieService: CookieService) {
    this.userName = this.cookieService.get('username')
  }

  async logout(): Promise<void> {
    await this.authService.logout(this.cookieService)
  }
}
