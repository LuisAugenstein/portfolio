import React from 'react'
import MobileButton from '../general/MobileButton'
import SidebarProject from '../general/Sidebar'
import DetailHeader from './DetailHeader'
import DetailBody from './DetailBody'

function Calculator(props) {
    return <div>
        <MobileButton />
        <SidebarProject currentlyOnProject={true} />
        <main id="main">
            <DetailHeader />
            <DetailBody />
        </main>
    </div>
}

export default Calculator