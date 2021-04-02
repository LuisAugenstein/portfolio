import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpShort } from 'react-icons/bs'

function BacktoTopButton(props) {

    const [activeStr, setActiveStr] = useState("");

    useEffect(() => {
        window.onscroll = () => {
            setActiveStr(window.scrollY > 100 ? "active" : "");
        }
    }, []);

    return <btn onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        class={"back-to-top d-flex align-items-center justify-content-center " + activeStr}>
        <BsArrowUpShort class="bs-arrow-up-short" />
    </btn>
}

export default BacktoTopButton