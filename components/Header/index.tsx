import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from "@/assets/logo.jpg"
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <header className='bg-white text-black shadow-md flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full min-h-[50px]'>
        <Link href={"/"}>
          <Image src={Logo} className='w-12 h-24 md:h-12' alt=''></Image>
          {/* <img src={Logo} alt="" className='h-8 md:h-12' /> */}
        </Link>
        <nav className="hidden md:flex items-center gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex flex-col md:flex-row items-center text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link href="/explore" className={`pb-1.5 px-1 font-medium`}>Explore</Link></li>
            <li><Link href="/blogs" className={`pb-1.5 px-1 font-medium`}>Blog</Link></li>
            {/* {!user ? 
            <li><Link href="/login" className={`${pathname==="/login" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Login</Link></li>
            :
            <li>
              <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                 Logout
              </div>
            </li>
            } */}
          </ul>
        </nav>
        { isOpen ? 
          <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
          : <BiMenu onClick={() => setIsOpen(true)} className='cursor-pointer text-3xl md:hidden relative z-50 text-green' />
        }
      </header>
        <div className={`md:hidden shadow fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white text-black px-4  py-2 md:px-10 z-30 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300`}>
          <div className='flex justify-end items-center'>
            { isOpen ? 
              <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
              : <BiMenu onClick={() => setIsOpen(true)} className='cursor-pointer text-3xl md:hidden relative z-50 text-green' />
            }
          </div>
          <nav className="md:hidden flex flex-col gap-16 p-4 pt-20 px-8 mb-8">
            <ul className='flex flex-col text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
              <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
              <li><Link href="/explore" className={`pb-1.5 px-1 font-medium`}>Explore</Link></li>
              <li><Link href="/blogs" className={`pb-1.5 px-1 font-medium`}>Blog</Link></li>
              {/* {!user ? 
              <li><Link href="/login" className={`${pathname==="/login" && "text-green"} pb-1.5 px-1 font-medium`}>Login</Link></li>
                :
                <li>
                  <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                    Logout
                  </div>
                </li>
              } */}
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Header