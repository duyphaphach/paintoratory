export interface UserResponse {
  id: string
  profile: {
    id: string
    email: string
    phone: string
    fullName: string
    referralCode: number
  }
}
