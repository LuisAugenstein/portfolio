import React from 'react'
import MobileButton from '../general/MobileButton'
import Sidebar from '../general/Sidebar'
import DetailHeader from './DetailHeader'
import DetailBody from './DetailBody'

function Calculator(props) {
    return <div>
        <main id="main">
            <DetailHeader />
            <DetailBody />
        </main>
    </div>
}

export default Calculator