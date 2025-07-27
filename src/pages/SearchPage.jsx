import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card.jsx'

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SearchPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParam = useQuery().get('q') || ''
  const [input, setInput] = useState(queryParam)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  // Keep input in sync with query param
  useEffect(() => {
    setInput(queryParam)
  }, [queryParam])

  // Debounced search effect
  useEffect(() => {
    const handler = setTimeout(() => {
      if (input) {
        setPage(1)
        fetchData(input, 1, true)
        navigate(`/search?q=${encodeURIComponent(input)}`)
      } else {
        setData([])
      }
    }, 300)
    return () => clearTimeout(handler)
  }, [input])

  // Fetch data function
  const fetchData = async (searchTerm, pageNum, replace = false) => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: searchTerm,
          page: pageNum
        }
      })
      setData(prev => replace ? response.data.results : [...prev, ...response.data.results])
    } catch (error) {
      setData([])
    }
  }

  // Infinite scroll
  const handleScroll = () => {
    if ((window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.scrollHeight) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fetch more data on page change
  useEffect(() => {
    if (page > 1 && input) {
      fetchData(input, page)
    }
  }, [page])

  return (
    <div className='py-16'>
      <div className='lg:hidden my-2 mx-1 top-[70px] z-30'>
        <input
          type='text'
          placeholder="Search here..."
          onChange={e => setInput(e.target.value)}
          value={input}
          className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900'
        />
      </div>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-5 justify-center lg:justify-start'>
          {
            data.map((searchData, index) => (
              <Card data={searchData} key={searchData.id + "search"} media_type={searchData.media_type} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage
