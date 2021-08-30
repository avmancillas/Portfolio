import React from 'react'
import {useHistory, Link} from 'react-router-dom'
import './Footer.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    let history = useHistory()
    const redirect = () => {
        history.push('/')
    }
    return (
        <>
            <footer className="text-center">
                <div className="text-center text-dark p-1">
                     
                    <p><a href='https://github.com/avmancillas'><FaGithub/></a></p>
                    <p><a href= 'https://www.linkedin.com/in/avi-mancillas/ '><FaLinkedin/></a></p>
                </div>
                
                
            </footer>
        </>
    )
}

export default Footer