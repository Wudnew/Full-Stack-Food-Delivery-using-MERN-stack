import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/navbar/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDesplay from '../../components/FoodDesplay/FoodDesplay';
import AppDownload from '../../components/AppDownload/AppDownload';
function Home() {

  const [category, setCategory]=useState("All");
  return (
    <div>
    <Header />
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDesplay category={category} />
    <AppDownload />
    </div>
  )
}

export default Home