import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

    return <main id="main">
        <Heropage />
        <Portfolio />
    </main>
}

export default Home