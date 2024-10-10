import React, { useEffect, useState } from 'react'
import BarnerHome from '../components/BarnerHome'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import HorizontalScollCard from '../components/HorizontalScrollCard'
import useFetch from '../hooks/useFetch'
const Home = () => {
  const trendingData = useSelector(state => state.movieoData.barnerData)

  const { data : nowPlayingData} = useFetch('/movie/now_playing');
  const { data: topRatedData } = useFetch('/movie/top_rated')
  const { data: popularTvShowData } = useFetch('/tv/popular')
  const { data: onTheAirShowData } = useFetch('/tv/on_the_air')
  return (
    <div>
      <BarnerHome/>
      <HorizontalScollCard data={trendingData} heading={'Trending'} trending={'true'} />
      <HorizontalScollCard data={nowPlayingData} heading={'Now Playing'} media_type={'movie'} />
      <HorizontalScollCard data={topRatedData} heading={'Top Rated'} media_type={'movie'} />
      <HorizontalScollCard data={popularTvShowData} heading={'Popular TV SHow'} media_type={'tv'} />
      <HorizontalScollCard data={onTheAirShowData} heading={'On the Air Show'} />
      </div>
  )
}

export default Home