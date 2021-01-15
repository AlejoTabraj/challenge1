import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
    background-color: #000;
`

const NavLink = styled(Link)`
    margin: 0 1em;
    text-decoration: none;
    color: #fff;
    
    &:hover{
        color: blue;
    }

    &:visited{
        color: blue;
    }
    
`

export {
    Container,
    NavLink
}