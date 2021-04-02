import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function BacktoTopButton(props) {

    const [activeStr, setActiveStr] = useState("");

    useEffect(() => {
        window.onscroll = () => {
            setActiveStr(window.scrollY > 100 ? "active" : "");
        }
    }, []);

    return <Link to="/#hero" class={"back-to-top d-flex align-items-center justify-content-center " + activeStr}>
        <i class="bi bi-arrow-up-short"></i>
    </Link>
}

export default BacktoTopButton