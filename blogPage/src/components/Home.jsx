import React from 'react'
import "./Online/Css/Home.css"
import First from './Online/First'
import Second from './Online/Second'
import Fourth from './Online/Fourth'
import Card from './Online/Card'
import Nav from './Online/Seactionnav'
import Scroll from './Online/Scroll'
import Footer from './Online/Footer'
import Cloths from './Clothes'


export default function Home() {
  return (
    <div>
      <div className="Homefirst">
        <First />

        <Second />          <Fourth />
        <Nav />
        <Card />
        <Scroll/>
        <Footer/>
        {/* <Cloths />  */}
         {/* <Counter2/> */}

      </div>
    </div>
  )
}
