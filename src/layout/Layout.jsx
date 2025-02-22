import React from 'react'
import { Outlet } from 'react-router'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <div className="wrapper">
                <Topbar />
                <Sidebar />
                <div className="content-wrapper">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
