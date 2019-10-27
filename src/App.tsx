import React, { FC, ComponentType } from 'react'
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'


import Header, { HeaderLinkProps } from './components/Header'
import {SocialLinkProps} from './components/Socials'

import Home from './pages/Home'
import Basket from './pages/Basket'

import './App.css'

const App : FC = () => {

  interface AnimatedRouteProps extends RouteProps {
    component : ComponentType<any>
  }

  const routes : Array<AnimatedRouteProps> = [
    {path: '/', component: Home},
    {path: '/basket', component: Basket},
  ]
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
      <Router>
      <header className="App-header">
        <Header headerLinks={headerLinks} socialLinks={socialLinks} />
          {routes.map( ( { path, component: Component } : AnimatedRouteProps ) => (
              <Route key={path as string} path={path} exact>
                { ({match}) => (
                  <CSSTransition in={!!match} key={path as string} timeout={1000} classNames='page' unmountOnExit>
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route> 
          ) )}
      </header>

      </Router>
    </div>
  )
}

export default App
