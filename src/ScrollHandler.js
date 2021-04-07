import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollHandler(props) {
    const location = useLocation();

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
        {props.children}
    </div>
}

export default ScrollHandler;