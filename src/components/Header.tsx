import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import Socials, {SocialLinkProps} from './Socials'

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

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

const BasketLink : FunctionComponent = () => (
    <Link to='/basket' className='header-link'> <FontAwesomeIcon icon={faShoppingBasket} /></Link>
)

const Header : FunctionComponent<HeaderProps> = ( { headerLinks, socialLinks } ) => (
    <div className='header'>
        <div className='header-link-container'>
            {headerLinks.map( ( link ) => <HeaderLink {...link} /> )}
        </div>
        <Socials links={socialLinks} />
        <BasketLink />
    </div>
)

export default Header