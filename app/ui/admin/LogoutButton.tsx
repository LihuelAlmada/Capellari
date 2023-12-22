"use client"

import { useAuthContext } from "@/app/context/AuthContext"

const LogoutButton = () => {

  const { logout } : any = useAuthContext()
  return (
    <button
      onClick={() => {
        logout()
      }}
      className='bg-red-500 hover:bg-red-600'
    > Log out</button>
  )
}

export default LogoutButton
