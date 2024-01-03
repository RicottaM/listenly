import { AfterViewChecked, AfterViewInit, Component, inject } from '@angular/core'
import { NavComponent } from '../../nav/nav.component'
import { AuthService } from '../../../services/auth/auth.service'
import { User } from '../../../models/user.model'
import { Recording } from '../../../models/recording.model'
import { CommonModule } from '@angular/common'
import { LoginFormComponent } from '../../login-form/login-form.component'
import { RecordingService } from './recording-service/recording.service'
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
  userName: string = ''
  hoveredRowIndex: number | null = null
  selectedRowIndex: number | null = null

  constructor(private cookieService: CookieService) {
    this.userName = this.cookieService.get('username')

    if (this.userName) {
      this.recordingService.getRecordings().then((recordings: Recording[]) => {
        this.authService.getUserByNick(this.userName).then((user: User | undefined) => {
          this.recordings = recordings.filter((recording: Recording) => user?.recordings.includes(recording.id))
        })
      })
    }
  }

  play(): void {
    console.log('Song played!!!')
  }

  setHoveredRow(rowIndex: number | null): void {
    this.hoveredRowIndex = rowIndex
  }

  setSelectedRow(rowIndex: number | null): void {
    this.selectedRowIndex = rowIndex
  }

  deleteUserRecording(index: number): void {
    this.authService.deleteRecording(this.recordings[index].id, this.userName)
  }
}
