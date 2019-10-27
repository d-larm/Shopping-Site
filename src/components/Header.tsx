import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import Socials, {SocialLinkProps} from './Socials'

import './Header.css'

export type HeaderLinkProps = {
    label : string,
    url: string,
    
}

type HeaderProps = {
    headerLinks : Array<HeaderLinkProps>,
    socialLinks : Array<SocialLinkProps>,
}

const HeaderLink : FunctionComponent<HeaderLinkProps> = ( { label, url } ) => (
    <Link to={`/${url}`} className='header-link'>{label}</Link>
)





const Header : FunctionComponent<HeaderProps> = ( { headerLinks, socialLinks } ) => (
    <div className='header'>
        <div className='header-link-container'>
            {headerLinks.map( ( link ) => <HeaderLink {...link} /> )}
        </div>
        <Socials links={socialLinks} />
    </div>
)

export default Header