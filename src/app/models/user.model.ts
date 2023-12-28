import { Recording } from './recording.model'

export interface User {
  id: number
  nickname: string
  email: string
  password: string
  recordings: number[]
}
