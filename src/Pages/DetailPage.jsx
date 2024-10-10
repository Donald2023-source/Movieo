import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import useFetchDetails from '../hooks/useFetchDetails';
import moment from 'moment';
import Divider from '../components/Divider';
import useFetch from '../hooks/useFetch';
import HorizontalScollCard from '../components/HorizontalScrollCard';
import VideoPlay from '../components/VideoPlay';

const DetailPage = () => {

  const [ playVideo, setPlayVideo ] = useState(false)
  const [playVideoId, setPlayVideoId] = useState('')
  const params = useParams();
  const imageUrl = useSelector(state => state.movieoData.imageUrl);
  const { data } = useFetchDetails(`/${params.explore}/${params.id}`)
  const { data: castData } = useFetchDetails(`/${params.explore}/${params.id}/credits`)
  const { data: similarData} = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const {data : recommendedData} = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
  console.log('star cast', castData)
  console.log('data', data)

  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");
  const writer = castData?.crew?.filter(el => el?.department === 'Writing')?.map(el => el?.name).join(", ");

  const handlePlayVideo = () => {
      setPlayVideoId(data)
      setPlayVideo(true)
  }
  return (
    <div>
      <div className='w-full h-[280px] relative hidden lg:block'>
        <div className='w-full mx-auto h-full'>
          <img src={imageUrl + data?.backdrop_path} className='h-full w-full object-cover' alt="" />
        </div>
      </div>
    
      <div className='absolute bg-gradient-to-b from-neutral-900/90 to-transparent' />

      <div className='container mx-auto px-3 py-16 lg:py-0 flex lg:flex-row flex-col lg:gap-10 gap-5'>
        <div className='relative mx-auto lg:-mt-28 lg:mx-0 lg:ml-0 w-fit min-w-60'>
          <img src={imageUrl + data?.poster_path} className='h-80 w-60 object-cover rounded' alt="" />

        <button onClick={() => handlePlayVideo()} className='my-3 transition-all py-3 px-4 text-center bg-white text-black rounded-xl font-bold text-lg hover:bg-gradient-to-l from-red-500 to-red-200 hover:scale-105'>Play now</button>
          <div>
            <h2 className='text-2xl lg:text-4xl font-bold'>{data?.title || data?.name}</h2>
            <p className='text-neutral-400'>{data?.tagline}</p>

            <Divider />

            <div className='flex gap-3 items-center my-3'>
              <p>Rating: {Number(data?.vote_average).toFixed(1)}+</p>

              <p>View: {Number(data?.vote_count)}</p>
              <p>Duration: {duration[0]}hrs {duration[1]}mins</p>
            </div>

            <div>
              <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
              <p>{data?.overview}</p>

              <div className='flex text-md items-center gap-3 my-3 text-center'>
                <p>
                  Status: {data?.status}
                </p>
                <span>|</span>
                <p>
                  Release Date: {moment(data?.release_date).format('MMMM Do YYYY')}
                </p>

                <span>|</span>

                <p>
                  Revenue : {data?.revenue}
                </p>
              </div>

              <Divider />
            </div>

            <div>
              <p><span className='text-white'>Director</span>: {castData?.crew[0]?.name}</p>

              <Divider />

              <p className='text-sm'><span className='text-base text-white'>Writers: </span>{writer}</p>
            </div>

            <Divider />

          </div>
        </div>
      </div>

      <Divider/>

      <h2 className='font-bold text-lg'>Cast: </h2>
      <div className='grid grid-cols-[repeat(auto-fit,90px)] gap-9'>
          {
            castData?.cast?.filter(el => el?.profile_path).map((cast, index) => {
              return (
                <div>
                  <div>
                    <img className='h-24 w-24 object-cover rounded-full' src={imageUrl + cast?.profile_path} alt="" />
                    <h2 className='text-center text-sm'>{cast?.name}</h2>
                  </div>
                </div>
              )
            })
          }
      </div>

      <div>
        <HorizontalScollCard data={similarData} heading={'Similar ' + params?.explore} media_type={params?.explore}/>
        <HorizontalScollCard data={recommendedData} heading={'Recommended ' + params?.explore} media_type={params?.explore}/>
      </div>

      {
        playVideo && (
          <VideoPlay data={playVideoId} close={() => setPlayVideo(false)} media_type={params?.explore}/>
        )
      }
      
    </div>
  )
}

export default DetailPage