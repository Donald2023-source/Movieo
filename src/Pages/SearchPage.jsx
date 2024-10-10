import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios';
import Card from '../components/Card';

const SearchPage = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async() => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page
        }
      })  
      setData((prev) => {
        return [
          ...prev,
          ...response.data.results
        ]
      })

      console.log('explore:', response.data.results)
    } catch (error) {
      console.error(error)
    }
}

const query =location?.search.slice(1)

    const handleScroll = () => {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setPage(prev => prev + 1)
      }
    }

        useEffect(() => {
          window.addEventListener('scroll', handleScroll)
        }, [])

        useEffect(() => {
          if(query){
            fetchData()
          }
        }, [setPage])

          useEffect(() => {
            if(query) {
              setPage(1)
            setData([])
            fetchData()
            }
            
          }, [location.search])
  return (
      <div className='py-16'>

        <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
          <input value={query.split("%20")?.join(" ")} className='px-4 py-1 text-lg w-full text-neutral-200 bg-white/50 rounded-full ' type="text" placeholder='Search here...' onChange={(e) => navigate(`/search?q=${e.target.value}`)} />
        </div>
            <div className='container mx-auto'>
              <h3 className='capitalize text-lg font-semibold my-3'>Search Results</h3>

              <div className='grid grid-cols-[repeat(auto-fit,230px)] justify-center lg:justify-start gap-6'>
                  {
                    data.map((searchData, index) => {
                      return (
                        <Card data={searchData} key={searchData.id + "search"} media_type={searchData.media_type}/>
                      )
                    })
                  }
                </div>
                
        </div>
      </div>
  )
}

export default SearchPage