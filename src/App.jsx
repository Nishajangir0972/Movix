import { useState, useEffect } from 'react'
import './App.css'
import {Routes ,Route,BrowserRouter} from 'react-router-dom'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Details from './pages/details/Details'
import Home from './pages/home/Home'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PagenotFound from './pages/404/PagenotFound'

function App() {
  const dispatch = useDispatch()
const {url} = useSelector((state)=>
state.home
)

  useEffect(() => {
    apiTesting();
  }, [])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res)
        dispatch(getApiConfiguration(res))
      })
  }

  return (
   <BrowserRouter>
   {/* <Header/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:mediaType/:id' element={<Details/>}/>
    <Route path='/search/:query' element={<SearchResult/>}/>
    <Route path='/explore/:mediaType' element={<Explore/>}/>
    <Route path='*' element={<PagenotFound/>}/>
   </Routes>
   {/* <Footer/> */}
   </BrowserRouter>

  )
}

export default App
