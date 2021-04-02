import React from 'react'
import DetailBody from './DetailBody'
import BreadCrumb from './Breadcrumb'

function Calculator(props) {
    return <div>
        <main id="main">
            <BreadCrumb />
            <DetailBody />
        </main>
    </div>
}

export default Calculator