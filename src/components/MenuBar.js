import React from 'react'
import styles from '../styles.css'

export default function MenuBar(props) {

  return(
    <div className="navbar-container">
      <div className="navbar" onClick={(e) => props.onClick(e)} value="home">home</div>
      <div className="navbar" onClick={(e) => props.onClick(e)} value="coding">coding</div>
      {/* <div className="navbar" onClick={(e) => props.onClick(e)} value="blog">Blog</div> */}
      <div className="navbar" onClick={(e) => props.onClick(e)} value="music">music</div>
      <div className="navbar" onClick={(e) => props.onClick(e)} value="comedy">comedy</div>
      <div className="navbar" onClick={(e) => props.onClick(e)} value="about">about</div>
      {/* <div className="navbar" onClick={(e) => props.onClick(e)} value="login">Login</div> */}
    </div>
  )
}

