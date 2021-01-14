import React from 'react'

import { NavList, LinkStyled } from './Nav.styled'
import {useLocation} from 'react-router-dom'


const LINK = [
    { to:'/', text:'Home'},
    { to:'/starred', text: 'Starred'},
]

const Navs = () => {

    const location = useLocation();
    return (
        <div>
            <NavList>
                {LINK.map(item =>(
                    <li key={item.to} >
                        <LinkStyled to={item.to} className={item.to === location.pathname ? 'active' : ''}>
                        {item.text}
                        </LinkStyled>
                    </li>
                ))}
                
            </NavList>
        </div>
    )
}

export default Navs
