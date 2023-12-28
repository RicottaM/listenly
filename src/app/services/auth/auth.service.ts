import { Injectable, inject } from '@angular/core'
import { User } from '../../models/user.model'
import { BehaviorSubject, Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)
  private userUrl: string = 'http://localhost:3000/users'
  private router: Router = inject(Router)

  async getUsers(): Promise<User[]> {
    const users = await fetch(this.userUrl)

    return (await users.json()) ?? undefined
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const users = await this.getUsers()

    return users.find((user: User) => user.email === email)
  }

  async addUser(nickname: string, email: string, password: string) {
    const userData = {
      nickname: nickname,
      email: email,
      password: password,
    }

    const userTaken = await this.getUserByEmail(email)

    if (userTaken) {
      console.error('Email already in use')
    } else {
      await fetch(this.userUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(response => {
          if (!response.ok) {
            response.text().then(errorText => {
              console.error(`Server error: ${response.status} - ${errorText}`)
            })

            if (response instanceof Error) {
              throw new Error(response.message)
            }
            throw new Error('An error occured while adding user')
          }
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error)
        })

      const user = await this.getUserByEmail(email)

      this.currentUser.next(user ?? null)
      this.router.navigate(['/'])
    }
  }

  async login(email: string, password: string): Promise<void> {
    const user = await this.getUserByEmail(email)

    if (!user) {
      console.error('Email not found')
    } else {
      if (user.password === password) {
        this.currentUser.next(user ?? null)
        this.router.navigate(['/'])
      } else {
        console.error('Invalid password')
      }
    }
  }

  logout(): void {
    this.currentUser.next(null)
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable()
  }
}
