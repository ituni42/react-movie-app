import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card.jsx'
import HorizontalScrollCard from '../components/HorizontalScrollCard.jsx'
import useFetch from '../hooks/useFetch.jsx'


const ExplorePage = () => {
  const params = useParams()
  let type = params.explore
  if (type === 'tvshows' || type === 'tv') type = 'tv'
  if (type === 'movies' || type === 'movie') type = 'movie'

  // Movie sections
  const { data: trendingMovies } = useFetch('/trending/movie/week')
  const { data: nowPlayingMovies } = useFetch('/movie/now_playing')
  const { data: topRatedMovies } = useFetch('/movie/top_rated')
  const { data: popularMovies } = useFetch('/movie/popular')

  // TV sections
  const { data: trendingTV } = useFetch('/trending/tv/week')
  const { data: onTheAirTV } = useFetch('/tv/on_the_air')
  const { data: topRatedTV } = useFetch('/tv/top_rated')
  const { data: popularTV } = useFetch('/tv/popular')

  return (
    <div className="py-16">
      <div className='container mx-auto'>
        {type === 'movie' && (
          <>
            <HorizontalScrollCard data={trendingMovies} heading={"Trending Movies"} media_type={"movie"} trending={true} />
            <HorizontalScrollCard data={nowPlayingMovies} heading={"Now Playing"} media_type={"movie"} />
            <HorizontalScrollCard data={topRatedMovies} heading={"Top Rated Movies"} media_type={"movie"} />
            <HorizontalScrollCard data={popularMovies} heading={"Popular Movies"} media_type={"movie"} />
          </>
        )}
        {type === 'tv' && (
          <>
            <HorizontalScrollCard data={trendingTV} heading={"Trending TV Shows"} media_type={"tv"} trending={true} />
            <HorizontalScrollCard data={onTheAirTV} heading={"TV Shows On The Air"} media_type={"tv"} />
            <HorizontalScrollCard data={topRatedTV} heading={"Top Rated TV Shows"} media_type={"tv"} />
            <HorizontalScrollCard data={popularTV} heading={"Popular TV Shows"} media_type={"tv"} />
          </>
        )}
      </div>
    </div>
  )
}

export default ExplorePage
