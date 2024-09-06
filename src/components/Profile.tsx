import { useStore } from '@/store'
import React from 'react'

const Profile = () => {
  const {isAuthenticated} = useStore()

  console.log(isAuthenticated);
  
  return (
    <div>Profile</div>
  )
}

export default Profile