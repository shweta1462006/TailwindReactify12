import React from 'react'
import "./Online/Css/Home.css"
import First from './Online/First'
import Second from './Online/Second'
import Third from './Online/Third'
import Counter2 from './Counter2'


export default function Home() {
  return (
    <div>
        <div className="Homefirst">
      <First/>
        
      <Second/>
          <Third/>
          <Counter2/>

      </div>
    </div>
  )
}
