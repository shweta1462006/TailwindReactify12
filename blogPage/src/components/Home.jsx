import React from 'react'
import "./Online/Css/Home.css"
import First from './Online/First'
import Second from './Online/Second'
import Fourth from './Online/Fourth'
import Card from './Online/Card'
import Seactionnav from './Online/Seactionnav'

import Counter2 from './Counter2'
import Cloths from './Clothes'


export default function Home() {
  return (
    <div>
        <div className="Homefirst">
      <First/>
        
      <Second/>          <Fourth/>
      <Seactionnav/>
<Card />
<Cloths/>
          {/* <Counter2/> */}

      </div>
    </div>
  )
}
