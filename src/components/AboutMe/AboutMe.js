import React from 'react';
import photo from '/Users/avi/Desktop/portfolio/src/assets/Screenshot3.png'


function AboutMe() {
    return(
    <div class= "row container card-panel" id ="aboutMe">
        <h2 class= "row center"></h2>
        <div class="row aboutmesection">
            <p className="photoSection">
              <img src={photo} class ="col s12 m4" id="avipic" alt="Photo of Avi" width="200" height="250"/>
            </p>
            
        </div>
        <div className="bio">
            <p class= "col s12 m4">
                         I'm Avi! I'm a Full Stack Developer specializing in Front-End work. I just completed 
                         a 24 week Full Stack Development Program at Rice University. I have experience 
                         ranging from CSS and Bootstrap to Javascrip and React. I love working on projects 
                         independently as well as with a group. Check out my Github for a couple of group projects I've worked on!
            </p>
        </div>
        </div>
    )
}

export default AboutMe
