import { Component, inject } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { AuthService } from '../../../services/auth/auth.service'
import { User } from '../../../models/user.model'
import { Recording } from '../../../models/recording.model'
import { CommonModule } from '@angular/common'
import { LoginFormComponent } from '../../login-form/login-form.component'
import { RecordingService } from '../../../services/recording/recording.service'
import { CookieService } from 'ngx-cookie-service'

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

  constructor(private cookieService: CookieService) {
    const userName: string = cookieService.get('username')

    if (userName) {
      this.recordingService.getRecordings().then((recordings: Recording[]) => {
        this.authService.getUserByNick(userName).then((user: User | undefined) => {
          this.recordings = recordings.filter((recording: Recording) => user?.recordings.includes(recording.id))
          console.log(this.recordings)
        })
      })
    }
  }
}
