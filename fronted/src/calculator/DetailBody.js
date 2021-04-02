import React from 'react'
import ImageSwiper from './ImageSwiper'

function DetailBody(props) {
    return <section id="portfolio-details" class="portfolio-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <ImageSwiper />
                </div>

                <div class="col-lg-4">
                    <div class="portfolio-info">
                        <h3>Calculator</h3>
                        <ul>
                            <li><strong>Project Goal</strong>: Implement a parser to evaluate basic string expressions create by a basic calculator.</li>
                            <li><strong>Used Tools</strong>: C++ backend, React frontend</li>
                            <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                        </ul>
                    </div>
                    <div class="portfolio-description">
                        <h2>This is an example of portfolio detail</h2>
                        <p>
                            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi l
                            andae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium
                            nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section>

}

export default DetailBody