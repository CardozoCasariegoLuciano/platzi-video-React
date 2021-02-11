import React from 'react'
import Header from './header'
import Footer from './Footer'

const Layout = ({ children }) => (

    <div className="App">

        <Header/>
        {children}
        <Footer/>

    </div>

)

export default Layout