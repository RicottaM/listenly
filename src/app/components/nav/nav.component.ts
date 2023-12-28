import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthService } from '../../services/auth/auth.service'
import { CommonModule } from '@angular/common'
import { User } from '../../models/user.model'

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

  constructor() {
    this.authService.getCurrentUser().subscribe((user: User | null) => {
      this.userName = user?.nickname ?? null
    })
  }

  logout(): void {
    this.authService.logout()

    window.location.reload()
  }
}
