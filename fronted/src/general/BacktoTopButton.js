import React, { useEffect, useState } from 'react';

function BacktoTopButton(props) {

    const [activeStr, setActiveStr] = useState("");

    useEffect(() => {
        window.onscroll = () => {
            setActiveStr(window.scrollY > 100 ? "active" : "");
        }
    }, []);

    return <btn onClick={() => window.scrollTo(0, 0)} class={"back-to-top d-flex align-items-center justify-content-center " + activeStr}>
        <i class="bi bi-arrow-up-short"></i>
    </btn>
}

export default BacktoTopButton