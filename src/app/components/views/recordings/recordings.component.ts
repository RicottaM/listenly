import { Component, inject } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { AuthService } from '../../../services/auth/auth.service'
import { User } from '../../../models/user.model'
import { Recording } from '../../../models/recording.model'
import { CommonModule } from '@angular/common'
import { LoginFormComponent } from '../../login-form/login-form.component'

@Component({
  selector: 'app-recordings',
  standalone: true,
  templateUrl: './recordings.component.html',
  styleUrl: './recordings.component.css',
  imports: [NavComponent, CommonModule, LoginFormComponent],
})
export class RecordingsComponent {
  authService: AuthService = inject(AuthService)
  recordingService: RecordingService = inject(RecordingService)
  recordings: Recording[] = []
  userName: string | null = null

  constructor() {
    this.authService.getCurrentUser().subscribe((user: User | null) => {
      this.userName = user?.nickname ?? null

      const recordingsId = user?.recordings ?? []

      const recordings = await
    })

    this.a
  }
}
