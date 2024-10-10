import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../components/Card';

const Explore = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0)

  const params = useParams()
    const fetchData = async() => {
        try {
          const response = await axios.get(`/discover/${params.explore}`, {
             params: {
            page : pageNumber
          } 
          })
        
          setData((prev) => {
            return [
              ...prev,
              ...response.data.results
            ]
          })
          setTotalPageNo(response.data.total_pages)
          console.log('explore:', response.data.results)
        } catch (error) {
          console.error(error)
        }
    }

    const handleScroll = () => {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setPageNumber(prev => prev + 1)
      }
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
    }, [])

      useEffect(() => {
        fetchData()
      }, [pageNumber])

      useEffect(() => {
        setPageNumber(0);
        setData([])
        fetchData()
      }, [params.explore])
  return (
    <div className='py-16'>
        <div className='container mx-auto'>
            <h3 className='capitalize text-lg font-semibold my-3'>Popular {params.explore} show</h3>

            <div className='grid grid-cols-[repeat(auto-fit,230px)] justify-center gap-6 lg:justify-start'>
              {
                data.map((exploreData, index) => {
                  return (
                    <Card data={exploreData} key={exploreData.id + "exploreSection"} media_type={params.explore}/>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Explore