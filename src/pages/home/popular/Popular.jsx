import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
// import '../style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/Carousel/Carousel'

const Popular = () => {
const [endpoint , setEndpoint] = useState("movie")

const {data, loading} = useFetch(`/${endpoint}/popular`)


const onTabChange = (tab)=>{
    setEndpoint(tab === "Movie" ? "movie" : "tv")
}

  return (
    <div className="carouseSection">
        <ContentWrapper>
            <span className="carouseTitle">what's Popular</span>
            <SwitchTabs data={["Movies" ,"TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Popular