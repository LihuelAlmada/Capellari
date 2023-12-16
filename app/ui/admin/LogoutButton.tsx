"use client"

import Button from '@/app/ui/Button'
import { useAuthContext } from "@/app/context/AuthContext"

const LogoutButton = () => {

  const { logout } : any = useAuthContext()
  return (
    <Button
      onClick={() => {
        logout()
      }}
      className='bg-red-500 hover:bg-red-600'
    > Log out</Button>
  )
}

export default LogoutButton
