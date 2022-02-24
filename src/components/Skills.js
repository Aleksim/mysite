
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {FaCircle, FaExternalLinkAlt, FaCloudDownloadAlt} from "react-icons/fa"
import Video from '../components/Video'

const Skills = () => {

    const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

    return (
<div className="section">
            <div className="container movetocenter">
        
               
                    <div className="section-style">

                        

                        <div className="skills">
                    
                             <div className="section-item">
                                <h2 className="section-topic2">
                                    Education
                                </h2>
                                
                                <ul >
                                    <li><span><FaCircle className='education-bullet1' size={10}/></span>Master's degree in marketing from university of Turku (2016)</li>
                                    <ul>

                                        <div className='sub-bullets'>
                                        <li className='pdf-download'>
                                            <div className=''>
                                                <span className='education-title'>Master's thesis topic:</span> "On the frontiers of the media landscape – Organisational new media buying in network context".

                                            </div> 
                                            <div className='grade'>
                                                <span className='education-title'>Master's thesis grade:</span> Eximia cum laude approbatur (6/7).

                                            </div> 

                                            <div className='pdf-button'>                          
                                                {data.allFile.edges.map((file, index) => {
                                                return (
                                                    <div key={`pdf-${index}`}>
                                                    <span className='education-title'>Master's thesis: </span>
                                                    <a href={file.node.publicURL} download>
                                                        Read it here <FaCloudDownloadAlt className='download-icon' size={15}/>.                                                    
                                                    </a>
                                            </div>
                                            )
                                            })}
                                            </div>  
                                        </li>
                                        </div>                                    
                                    </ul>
                                    <li><span><FaCircle className='education-bullet1' size={10}/></span>Bachelor's degree in marketing from university of Turku (2016)</li>
                                    <ul>

                                        <div className='sub-bullets'>
                                        <li className='pdf-download'>
                                            <div className=''>
                                                <span className='education-title'>Bachelors's thesis topic:</span> "The Socio-Technical structures that aid the success of platform services".

                                            </div> 
                                            <div className='grade'>
                                                <span className='education-title'>Bachelor's thesis grade:</span> 5/5 and an honorable mention for the best thesis.

                                            </div> 


                                        </li>
                                        </div>                                    
                                    </ul>
                                </ul>
                    
                            </div>
                            <div className="section-item">
                                <h2 className="section-topic2">
                                    Teamwork / leadership skills
                                </h2>
                            </div>
                            <div>
                                <h3><span className=""><FaCircle className='education-bullet1' size={10}/>Growth team leadership 2021-2017:</span></h3>
                                <p className='teamwork-skills'>
                                    I have set-up/ran formal 'growth teams' in four different organisations and participated in sparring about the topic in many other organisations since 2017. My growth teams have followed the "Sean Ellis" playbook where the focus has been on <span className='teamwork-emphasis'>fast tempo testing across the whole customer journey by a cross-competence team</span>. I wrote <span><a href="https://www.linkedin.com/pulse/how-run-growth-team-aleksi-immonen/">this blog post</a></span> about the topic, as a young and excited consultant, in the early 2018. The text is still somewhat valid eventhough nowadays I tend to have a little bit more pragmatic approach to the job. Growth team doesn't solve all problems, growth teams can be organised in many different ways - <span className='teamwork-emphasis'>growth team tries to fullfill the potential of the existing product/service.</span> Sometimes this aspiration can lead to extraordinary creativity.
                                </p>
                            </div>
                            <div>
                                <h3><span className=""><FaCircle className='education-bullet1' size={10}/>Product / start-up leadership 2021-2013:</span></h3>
                                <p className='teamwork-skills'>
                                    I have successfully led the development of digital products (typically with extremely limited resources) since 2013.
                                </p>
                                    <div className='sub-bullets'>
                                        <li className='pdf-download'>
                                            <div className='grade'>
                                            <p>
                                                <span className='education-title'>Grew (2020):</span> At Grew we had 7 month runway from Tempo-funding, three guys and a strong will to succeed. 
                                            </p>
                                            <p className='teamwork-content'>
                                                When we realized that, with the current technology, we would <span className='italic'>likely</span> not be able to get paying customers for our pointNG innovation in 7 months, we started to innovate and create other products. During this wild ride, we created <span><a href="https://www.pointNG.io">pointNG</a></span>, <span><a href="https://www.consolechat.io">Consolechat </a></span>(trending in front page of Hackernews for 12 hours and 6500 users in first 24h), <span><a href="https://www.hacker-ai.io">Hacker AI </a></span> (260 upvotes and #3 Product of the Day), <span><a href="https://www.growthhackertools.io">Growthhackertools </a></span>, <span><a href="https://www.grew.ai">Grew.ai </a></span> (a generic email subject line prediction tool), <span><a href="https://www.grewai.com">GrewAI </a></span>(our first GPT-3 application with Mailchimp integration) and last but not least <span><a href="https://www.grewai.com">Superlines </a></span> (A GPT-3 application). We got paying customers for Superlines few weeks before we ran out of money.
                                            </p>
                                            <p className='teamwork-content'>
                                                During these months of intensive work, I learned how powerful a small, well functioning team can be in today's world. I also learned how product development, traction and global product launches are done successfully.
                                            </p>
                                            </div> 
                                            <div className='grade'>
                                                <span className='education-title'>Selaamo (2019-2018):</span> ffffff
                                            </div> 
                                            <div className='grade'>
                                                <span className='education-title'>Whispr (2013):</span> Eximia cum laude approbatur (6/7).
                                            </div> 
                                            <div className='pdf-button'>                          
                                                {data.allFile.edges.map((file, index) => {
                                                return (
                                                    <div key={`pdf-${index}`}>
                                                    <span className='education-title'>Master's thesis: </span>
                                                    <a href={file.node.publicURL} download>
                                                        Read it here <FaCloudDownloadAlt className='download-icon' size={15}/>.                                                    
                                                    </a>
                                            </div>
                                            )
                                            })}
                                            </div>  
                                        </li>
                                        </div>    
                            </div>
                            <p className="teamwork-skills">
                                <span className="education-title">Grew 2020-2021</span>: Grew was a lesson on "learning to fly in a free fall" 😉. Our journey started when we got Tempo-funding for our pointNG innovation. However, we realized quickly that in order to make pointNG produce money we would need to do A LOT of technical development and even still the product market fit was highly questionable and depended on e.g. how privacy law would develop in the future. However, we had time on our hands and a great team so we started hustling. Eventually, we ended up creating <span><a href="https://www.pointNG.io">pointNG</a></span>, <span><a href="https://www.consolechat.io">Consolechat </a></span>(trending in front page of Hackernews for 12 hours and 6500 users in first 24h), <span><a href="https://www.hacker-ai.io">Hacker AI </a></span> (260 upvotes and #3 Product of the Day), <span><a href="https://www.growthhackertools.io">Growthhackertools </a></span>(my quick side hustle), <span><a href="https://www.grew.ai">Grew.ai </a></span> (a generic email subject line prediction tool), <span><a href="https://www.grewai.com">GrewAI </a></span>(our first GPT-3 application with Mailchimp integration) and last but not least <span><a href="https://www.grewai.com">Superlines </a></span> (A GPT-3 application). Before this project I had never built web crawlers, created animations, launched in product hunt, trended in Hackernews, created cap tables and financial projections, applied for patents in US and EU and so on.. Learned amazingly much in 7 months.
                            </p>
                            <p className="teamwork-skills">
                                <span className="education-title">Selaamo 2018-2019</span>: Selaamo was a big challenge from growth and leadership perspective: how to build a complex, two sided platform with physical dimensions, with no money and no full-time employees. Throughout the project my main focus was to figure out how we can make Selaamo a success while not burning anyone out or losing friendships. Our plans worked really well and we managed to get over 4000 users to the platform in the first few months and lots of sales happening on the platform. Things started to go downhill as we couldn't keep growing the user base quickly enough. This was due to 1) no VC was interested in funding book recycling 2) no money to set up customer acquisition programs 3) Team started to get weary after 1 year of working on weekends and after work. Learned a lot, especially about leadership.
                            </p>
                            <p className="teamwork-skills">
                                <span className="education-title">WhisprApp 2013-2014</span>: WhisprApp was my first taste of SaaS / mobile app / product development while I was studying marketing in Turku School of Economics. WhisprApp was exactly like the now famous 'Jodel' application. I did not know any developers at that time but luckily met the cool guys: Timo and Larisa in one hackathon. We eventually built the service for Windows Phone 8 and had some excited users in the university. We participated in the Summer of start-ups arranged by Boost Turku. Every start up coach hated our idea and wanted to change it 😂. Learned valuable lessons with the whole experience.
                            </p>
                            
                            <div className="section-item">
                                <h2 className="section-topic2">
                                    Communication skills
                                </h2>
                            </div>
                            <p className="now-text">
                                I think that in the end, my strongest skill is communication. I like to write and speak. Here are some of my writings:
                            </p>
                            <p className="now-text2">
                                <span className="year">Graduate thesis:  
                                        {data.allFile.edges.map((file, index) => {
                                        return (
                                            <div key={`pdf-${index}`}>
                                            <a href={file.node.publicURL} download>
                                                Check it out
                                            </a>
                                            </div>
                                        )
                                        })}
                                </span>
                            </p>
                            <p className="now-text2">
                                <span className="year">Blog post about the "future of growth hacking"</span>: 
                                <span><a href="https://www.linkedin.com/pulse/future-growth-hacking-aleksi-immonen/"> Check it out.</a></span>.
                            </p>
                            <p className="now-text2">
                                <span className="year">Article in Hackernoon</span>: 
                                <span><a href="https://hackernoon.com/turning-users-invisible-edge-machine-learning-in-privacy-first-location-detection-k1a34tj"> Check it out.</a></span> (we write in symbiosis with Kimmo 😄).
                                
                            </p>
                            <p className="now-text2">
                                <span className="year">Check my blog:<a href="/posts"> here</a></span> 
                            </p>
                            <div className="section-item">
                                <h2 className="section-topic2">
                                    Coding skills
                                </h2>
                            </div>
                            <p className="now-text2">
                                Should marketer know how to code? Most people say no. However, I've seen with my own eyes, while doing marketing work, how amazingly valuable it can be if you have a marketer who can also code. So, I've learned the coding stuff that is especially useful for a marketer:
                            </p>
                            <p className="now-text2">
                                <span className="year">Python</span>:
                                I have basic Python Skills. I can build Scrapy / Splash spiders and crawlers to automatically collect data and make them do work for me. I have also built various data collection scripts to get data from API's and other data spinning/engineering scripts (pandas, numpy).
                            </p>
                            <p className="now-text2">
                                <span className="year">Javascript</span>: I can do basic stuff with Javascript as well. I've built two simple ReactNative apps using context and hooks. <span><a href="https://github.com/Aleksim">I have some of my projects in Github</a></span>. I've also built one React web app using redux. <span><a href="https://www.growthhackertools.io">Growth Hacker Tools</a></span> is a Gatsby app with dynamic react app embedded into it and buch of scrapers running in the background.
                            </p>
                            <p className="now-text2">
                                <span className="year">Html/css</span>: I can do all the basic things using HTML and CSS.
                            </p>
                            <p className="now-text2">
                                <span className="year">SQL</span>: If needed, I can get my hands dirty and fetch stuff from sql/nosql.
                            </p>
                            <p className="now-text2">
                                <span className="year">GraphQl</span>: Yes, I've suffered to learn this as well.
                            </p>
                            <p className="now-text2">
                                <span className="year">GPT-3</span>: Not really a coding tool, but I understand the "psychology" and have built stuff with it.
                            </p>

                            <div className="section-item">
                                <h2 className="section-topic2">
                                    Tools
                                </h2>
                            </div>

                            <p className="now-text">
                                There are lots of tools in the world. And new tools are published everyday. It is hard to even remember all the tools that I've used, but on the other hand, the ones I remember are probably the ones I am best equipped to use again.
                            </p>



                            <p className="now-text2">
                                <span className="year">Adobe Campaign</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Salesforce marketing cloud</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Pardot</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Adobe Target</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Optimizely, VWO, Optimize</span>: Hands on experience + coordination experience.
                            </p>

                            <p className="now-text2">
                                <span className="year">Google ads</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Twitter ads</span>: Mainly coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Facebook ads</span>: Hands on experience + coordination experience.
                            </p>

                            <p className="now-text2">
                                <span className="year">Reddit, snapchat, influencer, celebrity etc etc</span>: I've analyzed dozens of different medias as a potential media investment target.
                            </p>

                            <p className="now-text2">
                                <span className="year">Google analytics</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Google tag manager</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Adobe analytics</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Simple analytics</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Mixpanel</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Hotjar</span>: Hands on experience + coordination experience.
                            </p>
                            <div className="section-item">
                                <h2 className="section-topic">
                                    App marketing
                                </h2>
                            </div>
                            <p className="now-text2">
                                <span className="year">AppsFlyer</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Branch</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Apptweak</span>: Hands on experience + coordination experience.
                            </p>
                             <p className="now-text2">
                                <span className="year">SEMrush</span>: Hands on experience + coordination experience.
                            </p>
                             <p className="now-text2">
                                <span className="year">Ahrefs</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Custobar</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Google Search Console</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Serverside tag manager</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">Yotpo</span>: Hands on experience + coordination experience.
                            </p>
                            <p className="now-text2">
                                <span className="year">BigQuery</span>: Hands on experience + coordination experience.
                            </p>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Skills
