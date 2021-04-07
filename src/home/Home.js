import React from 'react'
import ScrollHandler from '../ScrollHandler'
import Heropage from './Heropage'
import Portfolio from './Portfolio'

function Home(props) {

    return <main id="main">
        <ScrollHandler>
            <Heropage />
            <Portfolio />
        </ScrollHandler>
    </main>
}

export default Home