import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb(props) {
    return <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h2>Caclulator Project</h2>
                <ol>
                    <li><Link to="/#hero">Home</Link></li>
                    <li>Calculator</li>
                </ol>
            </div>
        </div>
    </section>
}

export default BreadCrumb