import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
    const {isAuthenticated} = getKindeServerSession()
    if(!(await isAuthenticated())){
        redirect("/api/auth/login")
    }
  return (
    <div>
        <h2 className='text-3xl text-center'>Welcome to my profile</h2>
    </div>
  )
}

export default page