import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

import useFetch from '../../../hooks/useFetch'

const HeroBanner = () => {
const [background , setBackground] = useState('')
const [query , setQuery] = useState('')
const navigate = useNavigate();

const {data , loading} = useFetch("/movie/upcoming")

const searchQueryHandler = (event) =>{
if(event.key === "Enter" && query.length>0){
navigate(`/search/${query}`)
}
}
  return (
   <div className="heroBanner">
    <div className="wrapper">
        <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className='subTitle'>
                Millions of movies , TV shows and people to discover.
            Explore now.
            </span>
            <div className="searchInput">
                <input type="text"
                onKeyUp={searchQueryHandler}
                onChange={(e)=> setQuery(e.target.value)}
                placeholder='Search for a movie or TV show....' />
                <button>Search</button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default HeroBanner