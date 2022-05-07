import React from 'react'
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub, FaRecycle} from "react-icons/fa"
import "../css/main.css"


const Now = () => {
    return (
        <div className="section">
            <div className="container is-max-desktop">
                <div className="section-style">
                    <div className="section-item">
                            <p className='about2'>Currently working as a <span className='teamwork-emphasis'>Performance Marketing Manager at <span><a target="_blank" href="https://www.rentle.io">Rentle</a><FaRecycle size={12} style={{marginLeft:"3px", marginTop:"", color:"#1DA1F2"}}/></span></span>.</p>
                            <p className='about2'>On this site you can read about my skills, thoughts and about the projects I have been working on! </p>
                            <p className='about2'>You can also find me on <span><a href="https://twitter.com/aleksimmonen"><FaTwitter size={15} style={{marginLeft:"3px", color:"#1DA1F2"}}/></a>, <a href="https://github.com/Aleksim"><FaGithub size={15} style={{marginLeft:"3px", color:"#000"}}/></a>, or <a href="https://www.linkedin.com/in/aleksi-immonen-31132233/"><FaLinkedinIn size={15} style={{marginLeft:"", color:"#2867B2"}}/>.</a></span> </p>
                            
                       
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Now
