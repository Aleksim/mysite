import React from 'react'
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"
import "../css/main.css"


const Now = () => {
    return (
        <div className="section">
            <div className="container is-max-desktop">
                <div className="section-style">
                    <div className="section-item">

    
                            <p className='about'>My name is Aleksi Immonen and I am a digital innovator, product owner, early-stage-growth specialist, former martech-consultant, growth hacker...<span className='teamwork-emphasis'>I can wear many hats</span>.</p>
                            <p className='about2'>I'm from Helsinki, Finland and currently looking for my next position.</p>

                            <p className='about2'>On this site you can read about my skills, blog posts and about the projects I have been working on! </p>
                            <p className='about2'>You can also find me on <span><a href="https://twitter.com/aleksimmonen"><FaTwitter size={15} style={{marginLeft:"3px", color:"#1DA1F2"}}/></a>, <a href="https://github.com/Aleksim"><FaGithub size={15} style={{marginLeft:"3px", color:"#000"}}/></a>, or <a href="https://www.linkedin.com/in/aleksi-immonen-31132233/"><FaLinkedinIn size={15} style={{marginLeft:"", color:"#2867B2"}}/>.</a></span> </p>
                        
                       
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Now
