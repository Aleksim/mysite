import React from 'react'
import Hero from './Hero'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div>
            <Hero/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
