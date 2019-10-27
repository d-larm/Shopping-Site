import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './App.css'

import Header, { HeaderLinkProps } from './components/Header'
import {SocialLinkProps} from './components/Socials'
import LargeContainer from './components/LargeContainer'

const App : FC = () => {

  const headerLinks : Array<HeaderLinkProps> = [
    { label: 'Home', url: '' },
    { label: 'Videos', url: 'videos' },
    { label: 'About Us', url: 'about' },
    { label: 'Contact', url: 'contact' },
  ]

  const socialLinks : Array<SocialLinkProps> = [
    { label: 'Instagram', url: 'https://instagram.com', icon: <FontAwesomeIcon icon={faInstagram} /> },
    { label: 'Facebook', url: 'https://facebook.com', icon: <FontAwesomeIcon icon={faFacebook}  />  },
    { label: 'Youtube', url: 'https://youtube.com', icon: <FontAwesomeIcon icon={faYoutube}  />  },
  ]


  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Header headerLinks={headerLinks} socialLinks={socialLinks} />
        <LargeContainer />
      </header>
      </BrowserRouter>
    </div>
  )
}

export default App
