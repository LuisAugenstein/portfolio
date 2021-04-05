import React, { useEffect } from 'react'
import DetailBody from './general/DetailBody'
import BreadCrumb from './general/Breadcrumb'
import { useLocation } from 'react-router'

function Calculator(props) {
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
        <BreadCrumb />
        <DetailBody />
    </main>
}

export default Calculator