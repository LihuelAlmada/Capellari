"use client"

import Button from '@/app/ui/Button'

const LogoutButton = () => {

  //const { logout } = useAuthContext()
  return (
    <Button
      onClick={() => {
        //logout()
      }}
      className='bg-red-500 hover:bg-red-600'
    > Log out</Button>
  )
}

export default LogoutButton
