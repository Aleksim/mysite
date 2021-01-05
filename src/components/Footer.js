import React from 'react'
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"
import "../pages/mystyles.scss"

const Footer = () => {
    return (
        <footer className="footer footer-style">
            <div className="content">
                <div className="icons-footer">
                    <h2 className="footer-connect">
                        Connect
                    </h2>
                    <div className="icons-center">
                        <a href="https://twitter.com/aleksimmonen">
                            <FaTwitter size={30} style={{marginRight:"25px", color:"#1DA1F2"}}/>
                        </a>
                        <a href="https://github.com/Aleksim">
                            <FaGithub size={30} style={{marginRight:"25px", color:"#fff"}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/aleksi-immonen-31132233/">
                            <FaLinkedinIn size={30} style={{color:"#2867B2"}}/>
                        </a>
                    </div>
                </div>            
            </div> 
        </footer>
    )
}

export default Footer
