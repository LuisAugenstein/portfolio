import React from 'react'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';
import SidebarHeader from './sidebarHeader'


function Sidebar(props) {

    let history = useHistory();

    const navItemData = [
        { destination: "/#hero", active: "active", icon: "bx-home", text: "Home" },
        { destination: "/#portfolio", active: "", icon: "bx-book-content", text: "Portfolio" }
    ]

    const navItems = navItemData.map(e => {
        return <li>
            <Link to={e.destination} className={"nav-link scrollto " + e.active}>
                <i class={"bx " + e.icon}></i>
                <span>{e.text}</span>
            </Link>
        </li>
    });


    return <header id="header">
        <div class="d-flex flex-column">
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