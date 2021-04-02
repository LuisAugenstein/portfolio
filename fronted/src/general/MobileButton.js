import React, { useEffect } from 'react'

function MobileButton({ isSidebarOpen, setSidebarOpen }) {
    const getIcon = () => isSidebarOpen ? "bi-x" : "bi-list"
    const getLeft = () => isSidebarOpen ? "0px" : "-300px"

    useEffect(() => {
        window.onresize = () => {
            if ((document.body.clientWidth < 1200 && isSidebarOpen) ||
                (document.body.clientWidth > 1200 && !isSidebarOpen)) {
                setSidebarOpen(!isSidebarOpen);
            }
        }
        let header = document.getElementById('header')
        header.style.left = getLeft()
    }, [isSidebarOpen]);


    return <i onClick={() => setSidebarOpen(!isSidebarOpen)}
        class={"bi mobile-button d-xl-none " + getIcon()} />


}

export default MobileButton