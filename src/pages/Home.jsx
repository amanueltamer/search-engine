import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';


export default function Home() {
  return (
    <div className='home'>

    <div className="home__header">

      <div className="home__headerLeft">
      <a href='https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header'>About</a>
      <a href='https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US&pli=1'>Store</a>
      </div>

      <div className="home__headerRight">
        <a href='https://mail.google.com/mail/?authuser=0&ogbl'>Gmail</a>
        <a href='https://www.google.com/imghp?hl=en&authuser=0&ogbl'>Images</a>
        <AppsIcon />
      <AccountCircleIcon />
      </div>
    </div>

    <div className="home__body">
      <img 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="" />
          <div className="home__inputContainer">
            <Search />
          </div>
    </div>
    
    </div>

    
  )
}
