import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';
import MobileButton from './MobileButton';
import SidebarHeader from './sidebarHeader'


function Sidebar(props) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    let history = useHistory();

    const navItemData = [
        { destination: "/#hero", icon: "bx-home", text: "Home" },
        { destination: "/#portfolio", icon: "bx-book-content", text: "Portfolio" }
    ]

    function linkClicked(destination) {
        if (document.body.clientWidth < 1200) {
            setSidebarOpen(false)
        }
    }

    const navItems = navItemData.map(e => {
        return <li>
            <Link to={e.destination} onClick={() => linkClicked()}>
                <i class={"bx " + e.icon}></i>
                <span>{e.text}</span>
            </Link>
        </li>
    });


    return <header id="header">
        <div class="d-flex flex-column">
            <MobileButton isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <SidebarHeader />
            <nav id="navbar" class="nav-menu navbar">
                <ul>
                    {navItems}
                </ul>
            </nav>
        </div>
    </header>
}

export default Sidebar