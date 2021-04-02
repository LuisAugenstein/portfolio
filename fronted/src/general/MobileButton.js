import React, { useEffect } from 'react'
import { BsX, BsList } from 'react-icons/bs'

function MobileButton({ isSidebarOpen, setSidebarOpen }) {

    useEffect(() => {
        window.onresize = () => {
            if ((document.body.clientWidth < 1200 && isSidebarOpen) ||
                (document.body.clientWidth > 1200 && !isSidebarOpen)) {
                setSidebarOpen(!isSidebarOpen);
            }
        }
        let header = document.getElementById('header')
        header.style.left = isSidebarOpen ? "0px" : "-300px"
    }, [isSidebarOpen]);


    return <btn onClick={() => setSidebarOpen(!isSidebarOpen)} class={"mobile-button d-xl-none "}>
        {isSidebarOpen ? <BsX /> : <BsList />}
    </btn>


}

export default MobileButton