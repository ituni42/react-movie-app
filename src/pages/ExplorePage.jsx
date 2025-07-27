import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card.jsx'


const ExplorePage = () => {
  const params = useParams()
  const [pageNo,setPageNo] = useState(1)
  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/explore/${params.explore}?page=${pageNo}`);
        setData(response.data.results);
      } catch (error) {
        // handle error
      }
    }
    fetchData()
  }, [params.explore, pageNo])

  const handleScroll = ()=>{
    if((window.innerHeight + document.documentElement.scrollTop + 1)>=document.documentElement.scrollHeight){
      setPageNo(preve=>preve+1)
    }
  }

  useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
  },[])


  return (
    <div className="py-16">
      <div className='container mx-auto'>
          <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore}</h3>
          
          <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-5 justify-center lg:justify-start'>
            {
              data.map((exploreData,index)=>{
                return(
                   <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore}/>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default ExplorePage
