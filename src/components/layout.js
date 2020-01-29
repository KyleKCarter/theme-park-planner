import React from 'react'

//components
import Header from './header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout;