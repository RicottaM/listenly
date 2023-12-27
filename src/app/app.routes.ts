import { Routes } from '@angular/router'
import { HomePageComponent } from './components/views/home-page/home-page.component'
import { LoginPageComponent } from './components/views/login-page/login-page.component'
import { RecordingsComponent } from './components/views/recordings/recordings.component'
import { AlbumsComponent } from './components/views/albums/albums.component'
import { PlaylistsComponent } from './components/views/playlists/playlists.component'
import { SignUpComponent } from './components/views/sign-up/sign-up.component'

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
    component: RecordingsComponent,
  },
  {
    path: 'albums',
    title: 'Listenly | Albums',
    component: AlbumsComponent,
  },
  {
    path: 'playlists',
    title: 'Listenly | Playlists',
    component: PlaylistsComponent,
  },
  {
    path: 'sign-up',
    title: 'Listenly | Sign up',
    component: SignUpComponent,
  },
]
