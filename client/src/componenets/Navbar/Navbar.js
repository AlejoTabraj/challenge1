import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/form'>Form</Link>               
            </div>
        </>
    )
}
