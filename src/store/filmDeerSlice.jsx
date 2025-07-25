import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    bannerData : [],
    imageURL : ""
}

export const filmDeerSlice = createSlice({
    name: 'filmDeer',
    initialState,
    reducers : {
        setBannerData : (state,action)=>{
            state.bannerData = action.payload
        },
        setImageURL : (state,action) =>{
            state.imageURL = action.payload
        }
    }
})

export const {setBannerData, setImageURL} = filmDeerSlice.actions

export default filmDeerSlice.reducer