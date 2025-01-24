import Link from 'next/link'
import React from 'react'
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    return (
        <nav className='w-11/12 mx-auto relative z-30 py-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link href="/">
                        Logo
                    </Link>
                </div>
                <div>
                    <ul className='h-full gap-5 lg:flex items-center'>
                        <Link href='/'>Home</Link>
                        <Link href="/profile">Profile</Link>
                        {
                            user ? <>
                                <LogoutLink>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Sign Out
                                    </button>
                                </LogoutLink>
                            </> :
                                <>
                                    <LoginLink>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                            Signin
                                        </button>
                                    </LoginLink>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar