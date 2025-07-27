import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MobileNavigation from './components/MobileNavigation.jsx';
import axios from 'axios';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData,setImageURL } from './store/filmDeerSlice.jsx';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTrenindingData = async () => {
      try {
        const response = await axios.get('/trending/all/week');
        dispatch(setBannerData(response.data.results));
      } catch (error) {
        // handle error
      }
    };
    const fetchConfiguration = async () => {
      try {
        const response = await axios.get('/configuration');
        dispatch(setImageURL(response.data.images.secure_base_url + 'original'));
      } catch (error) {
        // handle error
      }
    };
    fetchTrenindingData();
    fetchConfiguration();
  }, [dispatch]);
  return (
    <main className='pb-14 lg:pb-0'>
        <Header/>
        <div className='min-h-[90vh]'>
         <Outlet/>
         </div>
        <Footer/>
        <MobileNavigation/>
    </main>
  );
}

export default App;
