import React, { useState } from 'react'

import MenuBar from './MenuBar'
import Blog from './Blog'
import Login from './Login'
import Music from './Music'
import Comedy from './Comedy'
import AboutMe from './AboutMe'
import Coding from './Coding'


export default function Home(){

  const [page, setPage] = useState('home')


  const onClick = (e) => {
    setPage(e.target.value)
  }

  const onChange = () => {
    switch(page){
      case 'home':
        return <div>home page bulllshitttt</div>
      case 'music':
        return <Music/>
      // case 'blog':
      //     return <Blog/>
      case 'comedy':
        return <Comedy/>
      case 'coding':
        return <Coding/>
      case 'about':
        return <AboutMe/>
      case 'login':
        return <Login/>
      default:
        return <div> home pagepushhhhh</div>
    }

    
  }

  return ( 
    <> 
      <MenuBar onClick={onClick}/>
      {/* {onChange()} */}
      
    </>
  )
} 