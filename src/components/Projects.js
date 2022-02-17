import React from 'react'
import Video from "../components/video"
import ght from '../assets/test4.gif'
import {FaGithub, FaChevronRight, FaRegNewspaper} from "react-icons/fa"


const Projects = () => {
  return (
        <div className="section blog-section">
            <div className="container is-max-desktop">
                <h2 className='project-styling'>Projects</h2>
                <div className='project-content'>
                    <p>Here are some projects that I've been working on:</p>
                    <div>
                        <div className='project card'>
                              <div className="card-content">
                            <div className='headline-items'>
                                <h2 className='project-headline'>Growth Hacker Tools</h2>
                                <span className="tag is-primary headline-item1">Live</span>
                            </div>
                            <img src={ght} alt="growthhackertools.io image" />
                            <p className='project-text'>Growthhackertools.io is a martech tool aggregation site. I've built the site to keep me on track of the newest tools and innovation in the marketing technology space. In addition, Growthhackertools was also a great learning experience for me about GatsbyJS, Scrapy and Splash.</p>
                            <div className='buttons'>
                            {/* <p class="buttons">
                            <button class="button">
                            <FaGithub size={30} style={{marginRight:"25px", color:"#000"}}/>
                            <span>See the code</span>
                            </button>
                            </p> */}
                            
                            <a target="_blank" href='https://www.growthhackertools.io/'>
                            <p class="buttons">
                            <button class="button">
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#000"}}/>
                            <span>Visit the site</span>
                            </button>
                            </p>
                            </a>
                            {/* <p class="buttons">
                            <button class="button">
                            <FaRegNewspaper size={30} style={{marginRight:"25px", color:"#000"}}/>
                            <span>In the news</span>
                            </button>
                            </p> */}
                            </div>
                            </div>
                        </div>
                        <div className='project card'>
                            <div className="card-content">

                            <div className='headline-items'>
                            <h2 className='project-headline'>Superlines</h2>
                            <span className="tag is-primary headline-item1">Live</span>
                            </div>
                            <Video videoSrcURL='https://www.youtube.com/embed/cwrFGTcYoSM' videoTitle="YouTube video player"/>
                            <p className='project-text'>Superlines is a GPT-3 powered martech tool. It is used to generate- and optimize copy ideas. Superlines was our final product at Grew before our seed investment ran out. We managed to get paying customers for this one.</p>
                            <a target="_blank" href='https://www.superlines.io/'>
                            <p class="buttons">
                            <button class="button">
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#000"}}/>
                            <span>Visit the site</span>
                            </button>
                            </p>
                            </a>
                        </div>
                        </div>
                        <div className='project card'>
                            <div className="card-content">

                            <div className='headline-items'>
                            <h2 className='project-headline'>Grew AI</h2>
                            <span className="tag is-primary headline-item1">Live</span>
                            </div>
                            <Video videoSrcURL='https://www.youtube.com/embed/pR1CD73rIYU' videoTitle="YouTube video player"/>
                            <p className='project-text'>Grew AI was the earlier version of Superlines. It was aimed at Mailchimp users and had a built in Mailchimp integration. We pivoted quickly from Grew AI to Superlines when we realized that the typical Mailchimp user had nowhere near enough data to make the predictions work. The interest/demand was there but our solution could not really fulfill its promise.</p>
                            <a target="_blank" href='https://www.grewai.com/'> 
                            <p class="buttons">
                            <button class="button">
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#000"}}/>
                            <span>Visit the site</span>
                            </button>
                            </p>
                            </a>
                        </div>
                        </div>
                        <div className='project card'>
                            <div className="card-content">
                            <div className='headline-items'>
                            <h2 className='project-headline'>Selaamo</h2>
                            <span className="tag is-light headline-item1">Offline</span>
                            </div>                            
                            <Video videoSrcURL='https://www.youtube.com/embed/PYsivfGXj5M' videoTitle="YouTube video player"/>
                            <p className='project-text'>Selaamo was a share economy platform for book recycling. We created the service in about six months while working full-time. We managed to get over 4000 users for the service and sold a lot of books. We closed the service at the end of 2019 to the disappointment of many. I am still amazed how could we create such a good service with so limited resources!</p>
                            <a target="_blank" href='https://www.hs.fi/kulttuuri/art-2000005751573.html'>
                            <p class="buttons">
                            <button class="button">
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#000"}}/>
                            <span>Read about it in the news</span>
                           
                            </button>
                            </p>
                            </a>
                        </div>
                        </div>
                        <div className='project card'>
                            <div className="card-content">
                            <div className='headline-items'>
                            <h2 className='project-headline'>3Sicksty</h2>
                            <span className="tag is-light headline-item1">Offline</span>
                            </div>                            
                            <Video videoSrcURL='https://www.youtube.com/embed/ubpLqUlXnEc' videoTitle="YouTube video player"/>
                            <p className='project-text'>3Sicksty was a covid-19 contact tracing app built in the first weeks of the pandemic when people where emptying the grocery store shelves. Built with React Native and Express.js. The code repository will be there when the zombie apocalypse virus eventually hits ;).</p>
                            <a target="_blank" href='https://www.hs.fi/kulttuuri/art-2000005751573.html'>
                            {/* <p class="buttons">
                            <button class="button">
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#000"}}/>
                            <span>Read about it in the news</span>
                           
                            </button>
                            </p> */}
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Projects

