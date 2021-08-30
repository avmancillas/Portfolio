import React from "react";
import {Col} from 'react-bootstrap';


const Resume = () => {
  const cardStyle = {
    visibility: "visible",
    animationDelay: '0.2s',
    animationName: "fadeInUp",
    margin:'50'
}
return (
  <div>
    <h1 className="Resume"></h1>
    <Col class="col">
            <div class="thePlugSelect" data-wow-delay="0.2s" style={cardStyle}>
                  <div class="Info">
                      
                        <p class="description">Take a look at my resume!  </p>
                        <p class="btn gitBtns" ><a href="https://docs.google.com/document/d/1dX74PiY4rxMDstRRJrFsBzzj2Z6ovzMFT2HLtuygpBE/edit?usp=sharing">Resume </a></p>
                  </div>
            </div>
      </Col>
  </div>
)
}

export default Resume;