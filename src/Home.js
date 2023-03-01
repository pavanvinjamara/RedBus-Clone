import React from 'react'
import DataFetch from './DataFetch'
import BgImg1 from './assets/redbus1.png'
import BgImg2 from './assets/redbus2.png'
import "./Home.css";


function Home() {
  return (
    <div className='home'>
        <div className='home-data'>
        <DataFetch/>
        <img src={BgImg2} className="img-bg2" alt=" "/>
        </div>
        
        <div className='home-header'>
            <h1 className='bg-heading'>BOOK YOUR BUS WITH REDBUS</h1>
            <img src={BgImg1} className="img-bg1" alt=" background bus img" />
        </div>
    </div>

  )
}

export default Home