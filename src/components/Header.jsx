import logo from '../assets/logo.png'
import { NavLink, useNavigate, Link, useLocation } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { IoSearchOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { navigation } from '../constants'


  const Header = () => {
    const location = useLocation()
    console.log('Header', location)
    const removeSpace = location.search.slice(3).split('%20').join(" ")
    const [searchInput, setSearchInput] = useState(removeSpace);
    const navigate = useNavigate();
    

    useEffect(() => {
      if(searchInput) {
         navigate(`/search?q=${searchInput}`)
      } 
    }, [searchInput]);

    const handleSubmit = (e) => {
      e.preventDefault()
    }
    
    return (
      <header className="fixed z-40 top-0 w-full h-16 bg-black bg-opacity-50 px-1 lg:px-5">
          <div className="container mx-auto px-3 flex items-center h-full">
              <div>

                <Link to={'/'}>
                  <img 
                    src={logo} 
                    alt="logo" 
                    width={120} 
                    />
                  </Link>

              </div>

              <nav className='hidden lg:flex items-center gap-1 ml-5'>
                {
                  navigation.map((nav, index) => {
                    return (
                      <div key={index}>
                          <NavLink className={(({isActive}) =>`px-2 hover:text-neutral-100 ${isActive && 'text-neutral-100'}`)} key={nav.label} to={nav.href}>
                              {nav.label}
                            </NavLink>
                      </div>
                    )
                  })
                }
              </nav>

            <div className='ml-auto flex items-center gap-4'>
                <form onSubmit={handleSubmit} className='flex items-center gap-4'>
                   <input type="text" placeholder='Search here ...'  className='hidden lg:flex bg-transparent py-1 outline-none border-b-[0.1px] border-gray-500' onChange={(e) => setSearchInput(e.target.value)} value={searchInput}/>

                   <button className='text-2xl text-white'> <IoSearchOutline/>
                   </button>
                </form>
              
                <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                  <img src={userIcon} alt="user" className='w-10 h-10 rounded' />
                </div>
            </div>
          </div>
      </header>
    )
  }

  export default Header