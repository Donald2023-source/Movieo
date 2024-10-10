import React from 'react'
import { mobileNavigation } from '../constants'
import { NavLink } from 'react-router-dom'
const MobileNavigation = () => {
  return (
    <section className='h-16 block lg:hidden bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-50'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            {
                mobileNavigation.map((nav, index) => {
                    return (
                        <NavLink to={nav.href} key={nav.label+"mobileNavigation"} className={(({isActive}) => `px-3 flex h-full items-center flex-col justify-center ${isActive && 'text-white'}`)}>
                            <div>
                                {nav.icon}
                            </div>
                            <p>{nav.label}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MobileNavigation