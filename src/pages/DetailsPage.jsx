import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails.jsx'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Divider from '../components/Divider.jsx'
import useFetch from '../hooks/useFetch.jsx'
import HorizontalScrollCard from '../components/HorizontalScrollCard.jsx'
import { useState } from 'react'
import VideoPlay from '../components/VideoPlay.jsx'


const DetailsPage = () => {
  const params = useParams()
  const imageURL = useSelector(state => state.filmDeerData.imageURL)
  const {data} = useFetchDetails(`/${params.explore}/${params?.id}`)
  const {data: castData} = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const {data:similarData} = useFetch(`/${params.explore}/${params?.id}/similar`)
  const {data:recommendationData} = useFetch(`/${params.explore}/${params?.id}/recommendations`)
  const [playVideo,setPlayVideo] = useState(false)
  const [playVideoId,setPlayVideoId] = useState("")

  const handlePlayVideo = (data) =>{
    setPlayVideoId(data)
    setPlayVideo(true)
  }
  const duration = (data?.runtime/60).toFixed(1)?.split(".")
  const durationMinutes = parseFloat(`0.${duration[1]}`)*60
  

  return (
    <div>
        <div className='w-full h-[400px] relative hidden lg:block'>
            <div className='w-full h-full'>
              <img
                src={imageURL+data?.backdrop_path}
                className='h-full w-full object-cover'
                alt="Backdrop"
              />
            </div>
            <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900 to-transparent'>
            </div>
        </div>

        <div className='container mx-auto px-2 py-16 lg:py-0 flex flex-col lg:flex-row gap-4 lg:gap-10'>
            <div className=' relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
              <img
                  src={imageURL+data?.poster_path}
                  className='h-80 w-60 object-cover rounded'
                  alt="Poster"
                />
              <button onClick={()=>handlePlayVideo(data)} className='mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all'>Play now</button>
            </div>

            <div>

              <h2 className='text-2xl lg:4xl font-bold text-white '>{data?.title || data?.name}</h2>
              <p className='text-neutral-400'>{data?.tagline}</p>

                <Divider/>

              <div className='flex items-center gap-3'>
                  <p>
                    Rating: {Number(data?.vote_average).toFixed(1)}
                  </p>
                  <span>|</span>
                  <p>
                    Views: {Number(data?.vote_count)}
                  </p>
                  <span>|</span>
                  <p>Duration: {duration[0]}h {durationMinutes}min</p>
              </div>

              <Divider/>

              <div>
                  <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
                  <p>{data?.overview}</p>

                  <Divider/>


                  <div className='flex items-center gap-3 my-3 text-center'>
                      <p>
                        Status: {data?.status}
                      </p>
                      <span>|</span>
                      <p>
                        Release Date : {moment(data?.release_date).format("MMM Do YYYY")}
                      </p>
                      <span>|</span>
                      <p>
                        Revenue : {Number(data?.revenue)}
                      </p>
                  </div>

                  <Divider/>
              </div>

              <div>
                  <p><span className='text-white'>Director</span>: {castData?.crew[0]?.name}</p>
                  {/* <p>
                    <span>Writer : {writer}</span>
                  </p> */}
              </div>
              <Divider/>

              <h2 className='font-bold text-lg'>Cast:</h2>
              <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
                    {
                      castData?.cast?.filter(el => el.profile_path).map((starCast,index)=>{
                        return(
                          <div>
                            <div>
                              <img
                                src={imageURL+starCast?.profile_path}
                                className='w-24 h-24 object-cover rounded-full'
                                alt="Cast"
                              />
                            </div>
                            <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
                          </div>
                        )
                      })
                    }
              </div>
            </div>
        </div>
        
        <div>
            <HorizontalScrollCard data={similarData} heading={"Similar "+params?.explore} media_type={params?.explore}/>
            <HorizontalScrollCard data={recommendationData} heading={"Recommendend "+params?.explore} media_type={params?.explore}/>
        </div>
        {
          playVideo && (
            <VideoPlay data={playVideoId} close={()=>setPlayVideo(false)} media_type={params?.explore}/>

          )
        }
    </div>
  )
}

export default DetailsPage
