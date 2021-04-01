import React, { useRef } from 'react'
import MobileButton from '../general/MobileButton'
import Sidebar from '../general/Sidebar'
import BacktoTopButton from '../general/BacktoTopButton'
import Heropage from './Heropage'
import Portfolio from './Portfolio'



function Home(props) {

    return <div>
        <MobileButton />
        <Sidebar home={true} />
        <Heropage />
        <Portfolio />
        <BacktoTopButton />
    </div>
}

export default Home