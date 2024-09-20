import { UserInterface } from "./user"

export interface AuthInterface{
  token?: string
  user?: string
  isAuthenticated: boolean
}