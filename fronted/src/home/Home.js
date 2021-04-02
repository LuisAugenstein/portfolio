import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MobileButton from '../general/MobileButton'
import Sidebar from '../general/Sidebar'
import BacktoTopButton from '../general/BacktoTopButton'
import Heropage from './Heropage'
import Portfolio from './Portfolio'



function Home(props) {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }, [location])

    return <div>
        <MobileButton />
        <Sidebar />
        <Heropage />
        <Portfolio />
        <BacktoTopButton />
    </div>
}

export default Home