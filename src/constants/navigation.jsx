import { IoIosHome } from "react-icons/io";
import { FiTv } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

export const navigation = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : <FiTv />
    },
    {
        label : "Movies",
        href : "movie",
        icon: <BiCameraMovie />
    }
]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/",
        icon: <IoIosHome />

    },
    
    ...navigation,
    {
        label : "Search",
        href : "/search",
        icon: <IoSearch></IoSearch>
    }
]