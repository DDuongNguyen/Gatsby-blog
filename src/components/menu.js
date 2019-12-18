import React from 'react'
import Link  from 'gatsby-link'

const Menu = () => (
        <div
            style={{
            backgroundColor: 'rgb(216, 216, 216)',
            paddingTop: '10px', 
        }}>
        <ul 
        style={{
        listStyle: 'none ', 
        display:'flex',
        justifyContent: 'space-evenly'}}>

            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/about'>About</Link></li>
            <li><Link to ='/blog'>Blog Posts</Link></li>
        </ul>
        </div>
)

export default Menu;