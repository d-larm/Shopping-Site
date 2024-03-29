import React, { FunctionComponent, Props, ReactPropTypes, ComponentProps } from 'react'
import { Link, NavLink, RouteProps, RouteComponentProps, withRouter } from 'react-router-dom'
import Socials, {SocialLinkProps} from './Socials'

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

export type HeaderLinkProps = {
    label : string,
    url: string,
    
}

interface HeaderProps extends RouteComponentProps {
    headerLinks : Array<HeaderLinkProps>,
    socialLinks : Array<SocialLinkProps>,
}

const BasketLink : FunctionComponent = () => (
    <NavLink to='/basket' exact className='header-link' activeClassName='header-link-active'> <FontAwesomeIcon icon={faShoppingBasket} /></NavLink>
)

const Header : FunctionComponent<HeaderProps> = ( { match, headerLinks, socialLinks } ) => (
    <div className='header'>
        {console.log(match)}
        <div className='header-link-container'>
            {headerLinks.map( ( { label, url } ) => <NavLink key={label} to={`/${url}`} exact className='header-link' activeClassName='header-link-active'>{label}</NavLink> ) }
        </div>
        <Socials links={socialLinks} />
        <BasketLink />
    </div>
)

export default withRouter(Header)