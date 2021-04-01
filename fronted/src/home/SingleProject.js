import React from 'react'
import { Link } from 'react-router-dom'

function SingleProject(props) {
    return <div class="col-lg-4 col-md-6 portfolio-item">
        <Link to={props.link}>
            <div class="portfolio-wrap">
                <img src={props.src} class="img-fluid" alt="" />
                <div class="portfolio-links">
                    <a href="" title="More Details"><i class="bx bx-plus"></i></a>
                </div>
            </div>
        </Link>
    </div>
}

export default SingleProject