import { Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'
import { Recording } from '../../../../models/recording.model'

@Injectable({
  providedIn: 'root',
})
export class RecordingService {
  private recordingUrl: string = 'http://localhost:3000/recordings'
  private router: Router = inject(Router)

  async getRecordings(): Promise<Recording[]> {
    const recordings = await fetch(this.recordingUrl)

    return (await recordings.json()) ?? undefined
  }

  async getRecordingById(id: number): Promise<Recording[]> {
    const recording = await fetch(`${this.recordingUrl}/${id}`)

    return (await recording.json()) ?? undefined
  }

  async addRecording(title: string, minutes: number, seconds: number) {
    const recordingData = {
      title: title,
      minutes: minutes,
      seconds: seconds,
    }

    await fetch(this.recordingUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recordingData),
    })
      .then(response => {
        if (!response.ok) {
          response.text().then(errorText => {
            console.error(`Server error: ${response.status} - ${errorText}`)
          })

          if (response instanceof Error) {
            throw new Error(response.message)
          }
          throw new Error('An error occured while adding recording')
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
      })

    this.router.navigate(['/recordings'])
  }

  async deleteRecording(id: number): Promise<void> {
    await fetch(`${this.recordingUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          response.text().then(errorText => {
            console.error(`Server error: ${response.status} - ${errorText}`)
          })

          if (response instanceof Error) {
            throw new Error(response.message)
          }
          throw new Error('An error occured while updating user recordings')
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
      })

    window.location.reload()
  }
}
