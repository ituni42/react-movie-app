import React, { useEffect } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state=> state.filmDeerData.bannerData)
  //const [nowPlayingData,setNowPlayingData] = useState([])
  const {data : nowPlayingData} = useFetch('/movie/now_playing')
  const {data : topRatedData} = useFetch('/movie/top_rated')
  const {data : popularTvShowData} = useFetch('/tv/popular')
  const {data : onTheAirShowData} = useFetch('/tv/on_the_air')

  
  return (
    <div>
        <BannerHome/>
        <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
        <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
        <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
        <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Shows"} media_type={"tv"}/>
        <HorizontalScrollCard data={onTheAirShowData} heading={"TV Shows On The Air"} media_type={"tv"}/>

    </div>
  )
}

export default Home
