import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './Work.css';

const Work = () => {
  const cardStyle = {
    visibility: "visible",
    animationDelay: '0.2s',
    animationName: "fadeInUp"
}

  return (
              <Container>
                   
                    <Row class="row justify-content-center">
                        <Col class="col">
                            <div class="thePlugSelect" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="Info">
                                    <h6>The Plug Select</h6>
                                    <p class="description">This website was created to facilitate the bidding and selling process 
                                    for users when it comes to high-end merchandise.  </p>
                                    <p class="btn gitBtns" ><a href="https://github.com/NIASKAA/true-plug-select">GITHUB </a></p>
                                </div>
                            </div>
                         </Col>
                    

                        <Col class="col">
                            <div class="thePlugSelect" data-wow-delay="0.2s" style={cardStyle}>
                                <div class="Info">
                                    <h6>NutriCalifide</h6>
                                    <p class="description">This website provides the user with nutritional meals recipes as well as a 
                                    link to restaurants that would provide "cheat meals". When the user signs in, they are presented 
                                    with Breakfast, Lunch and Dinner columns. In each tab they can view recipes or meal options. The 
                                    web application also includes a calendar. </p>
                                    <p class="btn gitBtns" ><a href="https://github.com/avmancillas/NurtriCalifide">GITHUB </a></p>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>

                    <Row class="row justify-content-center">
                        <Col class="col-4">
                            <div class="thePlugSelect" data-wow-delay="0.2s"style={cardStyle} >
                                <div class="Info">
                                    <h6>Password Generator</h6>
                                    <p class="description">This website generates a password that is between 8 to 128 characters long and
                                     includes an upper case, lower case, numbers, and special characters.</p>
                                    <p class="btn gitBtns" ><a href="https://github.com/avmancillas/PasswordGenerator">GITHUB </a></p>
                                </div>
                            </div>
                        </Col>
                        
                    </Row> 
                </Container>
)

}
export default Work;