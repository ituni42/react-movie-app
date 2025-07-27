import React, {useEffect,useState} from 'react'
import logo from '../assets/TextLogo.png'
import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { navigation } from '../constants/navigation.jsx';

const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
    const [searchInput,setSearhInput] = useState(removeSpace)
    const navigate = useNavigate()
    

    console.log("location",)
    

    useEffect(() => {
        if(searchInput){
            navigate(`/search?q=${searchInput}`)
        }
        
    }, [navigate, searchInput]);
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
            <div className='px-4 mx-auto flex items-center h-full w-auto'>
                <Link to={"/"}>
                    <img 
                        src={logo}
                        alt='TextLogo'
                        width={170}
                    />
                </Link>

                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav,index)=>{
                            return(
                                <div>
                                    <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-200 ${isActive && "text-neutral-100"}`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className='hidden ml-auto lg:flex items-center gap-4'>
                    <form className='flex items-center gap-1' onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            placeholder="Search Here."
                            className='placeholder-slate-400 w-60 bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={(e)=>setSearhInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='px-14 text-2xl text-white'>
                            <IoSearch/>
                        </button>
                    </form>
                </div>
            </div>
    </header>
  )
}

export default Header
