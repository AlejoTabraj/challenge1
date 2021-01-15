import React from 'react'
import { Container, NavLink } from './styledNav'

export const Navigation = () => {
    return (
        <>
            <Container>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/form'>Form</NavLink>               
            </Container>
        </>
    )
}
