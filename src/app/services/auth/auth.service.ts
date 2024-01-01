import { Injectable, inject } from '@angular/core'
import { User } from '../../models/user.model'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  async getUserByNick(userName: string): Promise<User | undefined> {
    const users = await this.getUsers()

    return users.find((user: User) => user.nickname === userName)
  }

  async addUser(nickname: string, email: string, password: string, cookieService: CookieService) {
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

      cookieService.set('username', userData.nickname, 1)
      this.router.navigate(['/'])
    }
  }

  async login(email: string, password: string, cookieService: CookieService): Promise<void> {
    const user = await this.getUserByEmail(email)

    if (!user) {
      console.error('Email not found')
    } else {
      if (user.password === password) {
        cookieService.set('username', user.nickname, 1)
        this.router.navigate(['/'])
      } else {
        console.error('Invalid password')
      }
    }
  }

  async logout(cookieService: CookieService): Promise<void> {
    cookieService.delete('username')
    window.location.reload()
  }
}
