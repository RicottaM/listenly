import { Injectable, inject } from '@angular/core'
import { User } from '../../models/user.model'
import { BehaviorSubject, Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
  private userUrl: string = 'http://localhost:3000/users'
  private router: Router = inject(Router)

  async getUsers(): Promise<User[]> {
    const users = await fetch(this.userUrl)

    return (await users.json()) ?? undefined
  }

  async getUser(email: string): Promise<User | undefined> {
    const users = await this.getUsers()

    return users.find((user: User) => user.email === email)
  }

  async login(email: string, password: string): Promise<void> {
    const user = await this.getUser(email)

    if (!user) {
      console.error('Email not found')
    } else {
      if (user.password === password) {
        this.currentUser.next(user?.nickname ?? null)
        this.router.navigate(['/'])
      } else {
        console.error('Invalid password')
      }
    }
  }

  logout(): void {
    this.currentUser.next(null)
  }

  getCurrentUser(): Observable<string | null> {
    return this.currentUser.asObservable()
  }
}
