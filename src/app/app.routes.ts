import { Routes } from '@angular/router'
import { HomePageComponent } from './components/views/home-page/home-page.component'
import { LoginPageComponent } from './components/views/login-page/login-page.component'

export const routes: Routes = [
  {
    path: '',
    title: 'Listenly | Home Page',
    component: HomePageComponent,
  },
  {
    path: 'login',
    title: 'Listenly | Sign in',
    component: LoginPageComponent,
  },
  {
    path: 'recordings',
    title: 'Listenly | Recordings',
    component: LoginPageComponent,
  },
  {
    path: 'albums',
    title: 'Listenly | Albums',
    component: LoginPageComponent,
  },
  {
    path: 'playlists',
    title: 'Listenly | Playlists',
    component: LoginPageComponent,
  },
]
