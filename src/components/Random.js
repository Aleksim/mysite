import React from 'react'
import Video from "./Video"
import ght from '../assets/test4.gif'
import { FaGithub, FaChevronRight, FaRegNewspaper } from "react-icons/fa"


const Random = () => {
    return (
        <div className="section blog-section">
            <div className="container is-max-desktop">
                <div className='section-item'>
                    <h2 className='section-topic2'>Random Stuff</h2>
                </div>
                <div className='project-content'>
                    <p>I like to do all kinds of creative stuff.</p>

                    <div>
                        <div className='project card'>
                            <div className="card-content">
                                <div className='headline-items'>
                                    <h2 className='project-headline'>Short film: "The Little Place I Call Home" </h2>
                                </div>
                                <Video videoSrcURL='https://www.youtube.com/embed/vCGtV-dFAb0' videoTitle="YouTube video player" />
                                <div className='buttons'>
                                </div>
                            </div>
                        </div>
                        {/* <div className='project card'>
                              <div className="card-content">
                            <div className='headline-items'>
                                <h2 className='project-headline'>"Let's do weird ads turning memes into animations.."</h2>
                            </div>
                            <Video videoSrcURL='https://www.youtube.com/embed/AI7m3J6dAfM' videoTitle="YouTube video player"/>
                            <div className='buttons'>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className='project card'>
                              <div className="card-content">
                            <div className='headline-items'>
                                <h2 className='project-headline'>Best CPA ever xD</h2>
                            </div>
                            <Video videoSrcURL='https://www.youtube.com/embed/W-vFSHsdUTU' videoTitle="YouTube video player"/>
                            <div className='buttons'>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className='project card'>
                              <div className="card-content">
                            <div className='headline-items'>
                                <h2 className='project-headline'>I don't even know what to say about this..</h2>
                            </div>
                            <Video videoSrcURL='https://www.youtube.com/embed/dXggqOUIDDs' videoTitle="YouTube video player"/>
                            <div className='buttons'>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className='project card'>
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
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#1cdcf2"}}/>
                            <span>Visit the site</span>
                            </button>
                            </p>
                            </a>
                        </div>
                        </div> */}
                        {/* <div className='project card'>
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
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#1cdcf2"}}/>
                            <span>Visit the site</span>
                            </button>
                            </p>
                            </a>
                        </div>
                        </div> */}
                        {/* <div className='project card'>
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
                            <FaChevronRight size={30} style={{marginRight:"25px", color:"#1cdcf2"}}/>
                            <span>Read about it in the news</span>
                           
                            </button>
                            </p>
                            </a>
                        </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Random

