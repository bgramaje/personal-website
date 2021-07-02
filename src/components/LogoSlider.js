import React from 'react'
import '../styles/slider.module.css'


import svgHTML from '../images/50px_html.svg'
import svgJS from '../images/50px_javascript.svg'
import svgReact from '../images/50px_react.svg'
import svgNode from '../images/50px_nodejs.svg'
import svgNPM from '../images/50px_npm.svg'
import svgXD from '../images/50px_adobe-xd.svg'
import svgMongo from '../images/50px_mongodb.svg'
import svgExpress from '../images/50px_expressjs.svg'

const LogoSlider = () => {
    return (
        <div class="row">
            <div class="container">
                <section class="logo-carousel slider" data-arrows="true">
                    <div class="slide"><img src={svgHTML} /></div>
                    <div class="slide"><img src={svgJS} /></div>
                    <div class="slide"><img src={svgReact} /></div>
                    <div class="slide"><img src={svgNode} /></div>
                    <div class="slide"><img src={svgNPM} /></div>
                    <div class="slide"><img src={svgXD} /></div>
                    <div class="slide"><img src={svgMongo} /></div>
                    <div class="slide"><img src={svgExpress} /></div>
                </section>
            </div>
        </div>
    )
}

export default LogoSlider
