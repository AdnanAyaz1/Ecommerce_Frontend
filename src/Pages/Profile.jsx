import React from 'react'
import UserSidebar from '../Components/UserSidebar'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div className='flex'>
    <div>
    <UserSidebar/>
    </div>
     <div className='flex-1'>
     <Outlet/>
     </div>
    </div>
    </>
  )
}

export default Profile