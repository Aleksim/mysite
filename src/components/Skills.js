
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { FaCircle, FaExternalLinkAlt, FaCloudDownloadAlt,FaGraduationCap, FaTrophy, FaBook, FaRobot, FaTree, FaComments  } from "react-icons/fa"
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

                        <div className="section-item">
                            <h2 className="section-topic3">
                                Skills and experience
                            </h2>
                            <p className='teamwork-content'>
                                On this page I try to describe my skills and experience in more detail.
                            </p>
                            <p className='teamwork-content table-contents'>
                                Table of contents:
                            </p>
                            <p className='teamwork-content'>
                                1. Education
                            </p>
                            <p className='teamwork-content'>
                                2. Growth Hacking
                            </p>
                            <p className='teamwork-content'>
                                3. Product leadership
                            </p>
                            <p className='teamwork-content'>
                                4. Growth team leadership
                            </p>
                            <p className='teamwork-content'>
                                5. Ecommerce leadership
                            </p>
                            <p className='teamwork-content'>
                                6. Communications skills
                            </p>
                            <p className='teamwork-content'>
                                7. Coding skills
                            </p>
                            <p className='teamwork-content'>
                                8. Tools
                            </p>
                        </div>

                    <div className="skills">

                        <div className="section-item">
                            <h2 className="section-topic3">
                                1. Education
                            </h2>

                            <ul >
                                <li className='skills-sub-title'><span><FaCircle className='education-bullet1' size={8} /></span>Master's degree in marketing from university of Turku (2016)</li>
                                <ul>

                                    <div className='sub-bullets'>
                                        <li className='pdf-download'>
                                            <div className=''>
                                                <span className='education-title'><FaGraduationCap className='education-icon' size={17} />Master's thesis topic:</span> "On the frontiers of the media landscape – Organisational new media buying in network context".

                                            </div>
                                            <div className='grade'>
                                                <span className='education-title'><FaTrophy className='education-icon' size={16}/>Master's thesis grade:</span> Eximia cum laude approbatur (6/7).

                                            </div>

                                            <div className='pdf-button'>
                                                {data.allFile.edges.map((file, index) => {
                                                    return (
                                                        <div key={`pdf-${index}`}>
                                                            <span className='education-title'><FaBook className='education-icon' size={16}/>Master's thesis: </span>
                                                            <a href={file.node.publicURL} download>
                                                                Read it here <FaCloudDownloadAlt className='download-icon' size={15} />.
                                                            </a>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                                <li className='skills-sub-title'><span><FaCircle className='education-bullet1' size={8} /></span>Bachelor's degree in marketing from university of Turku (2013)</li>
                                <ul>

                                    <div className='sub-bullets'>
                                        <li className='pdf-download'>
                                            <div className=''>
                                                <span className='education-title'><FaGraduationCap className='education-icon' size={16}/>Bachelors's thesis topic:</span> "The Socio-Technical structures that aid the success of platform services".

                                            </div>
                                            <div className='grade'>
                                                <span className='education-title'><FaTrophy className='education-icon' size={16}/>Bachelor's thesis grade:</span> 5/5 and an honorable mention for the best thesis.

                                            </div>


                                        </li>
                                    </div>
                                </ul>
                            </ul>

                        </div>
                        <div className="section-item">
                            <h2 className="section-topic3">
                                2. Growth Hacking
                            </h2>
                        </div>
                            <p className='teamwork-skills'>
                                "Growth hacking" philosophy/mentality and skills have been an inspiration and a goal throughout my professional journey. 
                            </p>
                            <p className='teamwork-skills'>
                                <span className='teamwork-emphasis'>But isn't "Growth hacking" just a 2019 buzzword to repackage sales and marketing?</span>
                            </p>
                            <p className='teamwork-skills'>
                                Yes, and no.
                            </p>
                            <p className='teamwork-skills'>
                                Often when people talk about growth hacking they are just trying to repackage digital sales and -marketing and turn it into something more exciting. However, there is also the original scene from where the term incepted. That is what I originally got excited about and that is what I talk about when I talk about growth hacking.
                            </p>
                            <p className='teamwork-skills'>
                                <span className='teamwork-emphasis'>For me "growth hacking" is about a skillset and a mindset.</span> It is about being able to combine technology, creativity and customer/market/strategy understanding seamlessly. <span>Growth hackers can perceive opportunities and execute ideas that are out of reach for most people</span>. Growth hackers can perceive them due to their technical capabilities (typically software engineering), domain knowledge and due to their natural creativity and mandate/space/necessity to find/leverage these opportunities. It is no wonder that growth hacking was born from early web 2.0 software engineer entrepreneurs. They had the skills, the necessity and the mindset.
                            </p>
                            <p className='teamwork-skills'>
                                Growth hacking is not what you find when you write "best growth hack ideas in 2022" to Google search. It not what you get from a start-up guru's "best practices for ecommerce" powerpoint slides.
                            </p>
                            <p className='teamwork-skills'>
                                <span className='teamwork-emphasis'>Growth hacking is about novel, context specific solutions to important business problems.</span> Whereas following best practices and optimizing the funnel is just digital marketing.
                            </p>
                            <p className='teamwork-skills'>
                                You'll get a growth hacker when you arm a "wildly creative person" with "boring coding skills" and customer understanding (+smart goals). Domain knowledge is also useful, but outside the box thinking can be useful as well. I wrote this blog post in 2019 about the <span className='teamwork-emphasis'><a target='_blank' href='https://www.linkedin.com/pulse/future-growth-hacking-aleksi-immonen' >ideal skill profile of a growth hacker</a></span>.
                            </p>
                            <p className='teamwork-skills'>
                               <span className='teamwork-emphasis'>But Henry Ford, Steve Jobs and others were very creative and successful before no one had ever heard of growth hacking. Doesn't that prove that growth hacking is just another buzzword?</span> 
                            </p>
                            <p className='teamwork-skills'>
                                Yes, kind of. Novel, context specific solutions to important business problems have existed before the term "growth hacking" was invented. These solutions are typically the side product of the work of very smart and capable entrepreneurs. 
                            </p>
                            <p className='teamwork-skills'>
                                But we are now living in a world where you can EASILY create algorithms to recognise shapes, unleash artificial intelligence like GPT-3 do human tasks, create a bot armies and basically bend and modify the space and time in the digital universe according to your will like a magician. <span className='teamwork-emphasis'>That is, if you have the skills and creativity. </span> 
                            </p>
                            <p className='teamwork-skills'>
                                I have been in a growth hacker role, with this mindset, working as a consultant 2016-2019 in large nordic B2C and B2B companies, as a startup-founder 2018-2021 and in startups/small companies 2020-2022. My skills have also evolved through the years :).
                            </p>
                            <p className='teamwork-skills'>
                                <span className='teamwork-emphasis'>So..are you a growth hacker then?</span>
                            </p>
                            <p className='teamwork-skills'>
                                I think it is useful to know how to code as a growth/product person and look things through the growth hacking framework. Other frameworks can be very useful as well.
                            </p>
                        <div className="section-item">
                            <h2 className="section-topic3">
                                3. Product leadership
                            </h2>
                        </div>

                        <div>
                            {/* <h3><span className="skills-sub-title"><FaCircle className='education-bullet1' size={8} />Product leadership 2021-2013:</span></h3> */}
                            <p className='teamwork-skills'>
                                I have successfully led the development-, designed- and built digital products (typically with extremely limited resources) since 2013.
                            </p>

                            <div className='sub-bullets'>
                                <li className='pdf-download'>
                                    <div className='product-skills'>
                                        <p className='experience-title'>
                                            <span className='table-contents'>
                                                <FaRobot className='skills-icon' size={16} />Grew 2021-2020
                                            </span> 
                                            
                                        </p>
                                        <p>
                                            Grew was a company that me and two of my friends formed when we got<span className='teamwork-emphasis'><a href='https://www.businessfinland.fi/en/for-finnish-customers/services/funding/tempo-funding' target='_blank'> Tempo-funding<FaExternalLinkAlt className='external-link' size={10} /></a></span> for our <span className='teamwork-emphasis'><a target='_blank' href='https://www.pointng.io/'>PointNG</a></span> innovation (privacy-first alternative for detecting user location in the browser without sending coordinate-data to 3rd parties). The idea for PointNG was born from our participation to a global Covid-19 hackathon where we created the 3sicksty mobile and web apps. Our web app <span className='teamwork-emphasis'><a href='https://youtu.be/wdVjZzIqaB0' target='_blank'>presentation video<FaExternalLinkAlt className='external-link' size={10} /></a></span> got viral at the hackathon and we actually negotiated with the government of Nigeria officials on developing the 3sicksty service further with them.
                                        </p>
                                        <p className='teamwork-content'>
                                            During this time we came up with the idea of doing reverse geocoding in a privacy friendly manner by chaining neural networks and started working on the PointNG prototype. Here is a <span className='teamwork-emphasis'><a href='https://hackernoon.com/turning-users-invisible-edge-machine-learning-in-privacy-first-location-detection-k1a34tj'>blog post<FaExternalLinkAlt className='external-link' size={10} /></a></span> that I wrote to Hackernoon about the innovation (I wrote the story as Kimmo and with Kimmo 😄).                                     
                                        </p>
                                        <p className='teamwork-content'>
                                            We worked hard on PointNG and participated to various international location- and legal technology conferences to present our innovation. However, as we sparred and talked with various researchers and experts' we gradually started to realize that we would need to do a lot of technical development before PointNG would actually be useful/have value or even to make sense.
                                        </p>
                                        <p className='teamwork-content'>
                                            The fundamental problems with PointNG had to do with <span className='teamwork-emphasis'>1)</span> the location identification accuracy (it was always an approximation), <span className='teamwork-emphasis'>2)</span> the same protection that pointNG gave to the user could be done more easily in other ways that did not require neural networks and <span className='teamwork-emphasis'>3)</span> the previous location "hierarchy level" was always transfered via browser request anyway. These problems drastically limited the potential business use cases for pointNG. 
                                        </p>
                                        <p className='teamwork-content'>
                                             We saw a path for solving some of these issues by e.g. adding a Tor-network layer to the product but this would have required a lot of technical development and was 'out of scope' for the Tempo-financing. In the end, we realized that pointNG was mostly <span className='teamwork-emphasis'>a cool solution looking for a problem</span> and our limited legal- and location technology domain knowledge did not make our team very tempting venture capital investment. However, we proceeded in patenting the 'chaining process' in EU and the USA.
                                        </p>
                                        <p className='teamwork-content'>
                                            When we realized that we would likely not be able to get paying customers for PointNG anytime soon, we started 'piloting' other Saas-ideas (on the side). We had only few months to go before our money was going to run out so <span className=''>we had to be smart</span>. Our approach in piloting these 'other ideas' was based on the following principles: <span className='teamwork-emphasis'>1)</span> domain knowledge (we need to understand the domain that we are building a solution for), <span className='teamwork-emphasis'>2)</span> traction (we need to have proof that people want what we are developing) and <span className='teamwork-emphasis'>3)</span> quick iteration (if it doesn't make sense, stop doing it).
                                        </p>
                                        <p className='teamwork-content'>
                                            During few wild months, we created <span className='teamwork-emphasis'><a href="https://www.consolechat.io" target='_blank'>Consolechat </a></span>(trending on the front page of <span className='teamwork-emphasis'><a href='https://news.ycombinator.com/news' target='_blank'>Hackernews</a></span> for 12 hours and 6500 users in first 24h),  <span className='teamwork-emphasis'><a href="https://www.hacker-ai.io" target='_blank'>Hacker AI </a></span> (260 upvotes and #3 Product of the Day in <span className='teamwork-emphasis'><a href='https://www.producthunt.com/' target='_blank'>Product Hunt</a></span>), <span className='teamwork-emphasis'><a href="https://www.growthhackertools.io" target='_blank'>Growthhackertools </a></span> (a martech-tool aggregation site), <span className='teamwork-emphasis'><a href="https://www.grew.ai" target='_blank'>Grew.ai </a></span> (a generic email subject line prediction tool) and <span className='teamwork-emphasis'><a href="https://youtu.be/Ygpdq4xfYKU" target='_blank'>Ztep</a></span> (video/influencer fashion shopping app, Ztep was just a concept that we built with Marvel).
                                        </p>
                                        <p className='teamwork-content'>
                                           Then, <span className=''>suprisingly</span>, we got access to <span className='teamwork-emphasis'><a href='https://openai.com/api/' target='_blank'>Open AI's invite-only GPT-3 API</a></span>. At that point, we really started hustling and created <span className='teamwork-emphasis'><a href="https://www.grewai.com" target='_blank'>GrewAI </a></span>(our first GPT-3 application with Mailchimp integration) and last but not least <span className='teamwork-emphasis'><a href="https://www.superlines.io" target='_blank'>Superlines </a></span> (A GPT-3 application). We got paying customers for Superlines few weeks before we ran out of money which was a pretty heroic achievement considering our resources and situation.
                                        </p>
                                        <p className='teamwork-content'>
                                            The 7-8 months of Grew was truly about <span className='teamwork-emphasis'>"learning to fly on a free fall"</span>. During these months we learned how <span className=''>powerful</span> a small, well functioning team can be in today's world. We also learned how product development, traction and global product launches should be done. I personally took drastic leaps on my professional skills from learning to animate to making decisions on when to pivot a business and how to apply for tech patents in EU and USA and so on. We did everything as a team and needless to say<span className='teamwork-emphasis'> our team was truly epic</span>.                                        </p>
                                        <p className='teamwork-content'>
                                            My role in all of this was to be responsible for all things except building the products (growthackertools.io being the exception) or handling the paper work (patent- and Business Finland applications being the exceptions).
                                        </p>
                                        <p className='teamwork-content'>
                                            <span className='teamwork-emphasis'>What I wish we had done differently in Grew?</span> Hindsight is 20/20 but.. We did the classic mistake of being too excited about the technology behind PointNG without really understanding to whom and for what purpose we were building the service for. We acknowledged this risk early on and discussed about it, but instead of really putting time and effort to study the domain and to interview the experts, we pushed forward. This mistake caused us to spend months on focusing on a service that was pretty much destined to go nowhere. Superlines should have been our Tempo-project but it became possible only after we got access to GPT-3.
                                        </p>

                                    </div>
                                    <div className='selaamo-skills'>
                    
                                    <p className='experience-title'>
                                        <span className='table-contents'><FaTree className='skills-icon' size={16} />Selaamo 2019-2018</span> 
                                    </p>
                                    <p className='teamwork-content'>
                                        Selaamo was a share economy platform for used book sales. Our vision was to turn peoples' bookshelves into 'minibookstores'. It was a company that me and three of my friends formed as a side project while we all had full-time jobs. I came up with the idea and gathered the team.
                                    </p>
                                    <p className='teamwork-content'>
                                        Early on we knew that Selaamo would be a challenging service to build. It was not because of technology, but because of its <span className='teamwork-emphasis'> "<a href='https://www.amazon.com/Cold-Start-Problem-Andrew-Chen/dp/0062969749' target='_blank'>cold start problem</a>"</span>. I.e. how to build a service that gets its value from network effects?
                                    </p>
                                    <p className='teamwork-content'>
                                        I had studied this phenomenon in university and our solution was two fold: <span className='teamwork-emphasis'>1)</span> before we built anything, we interviewed close to 50 used book sellers (mostly by contacting them in Facebook) and at the same time recruited those people to become part of the 'Selaamo community'. <span className='teamwork-emphasis'>2)</span> our service was designed and built 'surgically' with our user community to include only those features that would address the problems that people actually had in used book sales. With this approach we started to plant the seeds of solving the "cold start problem". We started having people that 'gave a damn' about the service and also who would eventually become users and ambassadors for the service. These community members were also involved in designing the service (if their ideas made sense). We communicated about the ups and downs of our journey and progress and tried to truly include these people.
                                    </p>
                                    <p className='teamwork-content'>
                                        Another strategic decision for solving this problem was to seek PR aggressively BEFORE the launch. We contacted all the possible local newspapers and radio channels to spread the word. In these multiple appearances in the local media, we also always pointed people to sign up at our website to be informed when we would launch the service as well as to join our Selaamo community. Using these tactics we ended up having hundreds of people sign up to our email list that we could contact when we would launch the service. These people were also geographically close to each other which was a good thing. Because the special thing about Selaamo's network effects was that the 'nodes' in the network needed to be in geographically close proximity.
                                    </p>
                                    <p className='teamwork-content'>
                                        Another big influence in our product decisions was Peter Thiel's book <span className='teamwork-emphasis'><a href='https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296'>"from zero to one"</a></span>. What we took away from that book was that in order to make Selaamo successful, it wasn't enough to make incremental improvements compared to the other solutions out there. Selaamo needed to be exponentially better for people to actually care and start recycling books instead of throwing them to trash.
                                    </p>
                                    <p className='teamwork-content'>
                                        Good thing was that the existing systems/services were so bad that 10X improvement was totally doable. In Selaamo this improvement came from e.g. <span className='teamwork-emphasis'>1)</span> cutting the time it took to put a book on sale from minutes to seconds, <span className='teamwork-emphasis'>2)</span> Automatically filling up all the book details of most books so that people only needed to give price when they put books on sale, <span className='teamwork-emphasis'>3)</span> People could sell books without negotiating the time and place to meet the buyer/seller using our "pick-up locations".
                                    </p>
                                    <p className='teamwork-content teamwork-emphasis'>
                                        So wait... you guys had physical pick-up locations for your digital service? Why not use the Postal services or some other service?
                                    </p>
                                     <p className='teamwork-content'>
                                         The transfer of used books/low price items from the seller to the buyer is perhaps the biggest obstacle in "low price item" recycling. Our goal was to create a really, damn good service so we took a swing towards this problem. We also acknowledged that this was a problem (and perhaps still is a problem) more broadly in share economy and our solution could be a service in itself. Nevertheless, after pretty tough negotiations with the cities- and libraries of Helsinki/Espoo/kauniainen we got free real estate from the libraries for our pick-up locations. This kind of deal was never done with anyone else before. The pick-up system was also what generated money for us, because each transaction using our pick-up locations cost 1 euro. It may sound like a small number but when you consider the scale of transactions we were aiming for, the average price of a used book (very low) and how many times individual book could be sold, it was actually potentially pretty damn profitable.
                                    </p>

                                    <p className='teamwork-content'>
                                        But yeah because there was nothing out there to help to solve this problem, we basically created a better share economy transaction/logistics system than any service out there, by ourselves.. And people actually used it!
                                    </p>
                                    <p className='teamwork-content'>
                                        Our launch of Selaamo was a success. To counter the cold start problem we actually launched the service little bit earlier for our own community and after that to the general public. This way we also managed to fix few critical bugs before the less forgiving audience started adopting the service. We had books, buyers and sellers in the service. They were concentrated mostly to southern Helsinki and we they were selling a lot of books. I personally sold books with over 100 euros. We were also featured in <span><a href='https://www.hs.fi/kulttuuri/art-2000005751573.html'>Helsingin Sanomat</a></span> three times.
                                    </p>
                                    <p className='teamwork-content teamwork-emphasis'>
                                        Cold start problem kinda solved.. what next? 
                                    </p>
                                    <p className='teamwork-contentg'>
                                       Growth requires resources like money, time and people. We did not have them. Our discussions with investors were short, if there were any. We had over 4000 downloads of our application after 5 months which was a good achievement. But in order for a service like Selaamo to survive, it needs to grow. And our growth started to stall. As we continued to not be succesful in our efforts to get funding and after working on a project for so long time we just started to get tired. One of us got a kid and the rest were changing jobs. It started to become hard to continue Selaamo on our free time. After a year and half, we decided to close the service. It was a hard decision, but in the end, no one felt that the cause was strong enough to continue fighting and believing. 
                                    </p>
                                    <p className='teamwork-content'>
                                        <span className='teamwork-emphasis'>What I wish we had done differently in Selaamo?</span> We did many things very right and the application was excellent, but maybe we pushed little bit too hard in the beginning. We all were really motivated to build a share economy platform that people were actually using, but the business case was so slim (with the forecasted adoption curve), that it would have required amazing dedication to make it work.  After year of working on a project we just started to get weary. Entrepreneurship is never easy, but it is especially hard if you can't convince anyone to invest and you have a day job on the side. We all learned a lot with Selaamo but I wonder if we were also too optimistic, in the beginning, about Finnish peoples' willingness to recycle books. Finns read a lot, but maybe Selaamo was still not easy enough to use. Perhaps a machine learning solution, where you could just photograph your bookshelf and put them ALL in sale, in seconds, was what was required. We even looked into that, but the technology wasn't yet there.
                                    </p>
                                    </div>
                            
                                    <div className='whispr-skills'>

                                    <p className='experience-title'>
                                        <span className='table-contents'><FaComments className='skills-icon' size={16} />Whispr 2014-2013</span> 
                                    </p>
                                    <p className='teamwork-content'>
                                         Whispr was an anonymous location based communication mobile app. Exactly like the nowadays popular Jodel app. Whispr was born when I was in the university of Turku and I really wanted to get into the start-up and software game. So one night after I became home from a student party I came up with the idea: anonymous location based chat. I went to a local hackathon few weeks later and met Timo and Larisa. We liked each others jokes and got along very well. After some time of thinking about what could we build, I pitched Whispr to them. 
                                    </p>

                                    <p className='teamwork-content'>
                                        Long story short, we built the service and added some other people to the team and soon enough we had the service ready for Windows Phone 8! Back then people were still using Nokia phones and we had few really excited users at the university.
                                    </p>
                                    <p className='teamwork-content'>
                                        Whispr was mostly just about doing cool stuff and not super serious. However, we did good job: we even won the ICT-showroom competition in 2014 out of 72 teams. We also participated to the start-up journey at Boost Turku, but back then all the "grown ups / start-up coaches" hated our idea and wanted to change it. It was not so fun to be yelled at and unfortunately we did not have the skills to take Whispr further. We still believe that 2014 Whispr and its features were better than what Jodel is today. 
                                    </p>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="section-item">
                            <h2 className="section-topic3">
                                4. Growth team leadership
                            </h2>
                        </div>

                        <div>
                            <p className='teamwork-content'>
                                I have set-up/ran formal 'growth teams' in four different organisations and participated in sparring about the topic in many other organisations since 2017. Below are the organisations where I have ran the formal "growth process":
                            </p>
                            <div className='bullet2'>
                            <p className=''><span><FaCircle className='education-bullet2' size={8} /></span>Lumise Valovelho</p>
                            <p className=''><span><FaCircle className='education-bullet2' size={8} /></span>Musopia</p>
                            <p className=''><span><FaCircle className='education-bullet2' size={8} /></span>Avaus Marketing Innovations clients'</p>
                             </div>                       


                            <p className='teamwork-content'>
                                <span className='teamwork-emphasis'>..but wait, what even is a growth team?? </span>
                            </p>
                            <p className='teamwork-content'>
                                Growth teams are focused on the <span className='teamwork-emphasis'><a href='https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version' target='_blank'>AAARRR<FaExternalLinkAlt className='external-link' size={10} /></a></span> and finding unique solutions to important business problems. So, in other words growth teams innovate and optimize to improve the awareness, -acquisition, -activation, -referral, -retention and -revenue phases of the customer lifecycle.
                            </p>
                            
                            <p className='teamwork-skills-space'>
                                <span className='teamwork-emphasis'>But it is not that simple.</span> In this messy and complicated world, you can never truly separate the 'customer life cycle phases' and the 'product' from each other. Often they overlap and you may end up with some pretty strange 'growth hacks' that can affect the product and a lifecycle phase simultaneously. Like this built in acquisition/referral/community feature we did in Selaamo:
                            </p>
                            <Video videoSrcURL='https://www.youtube.com/embed/PYsivfGXj5M?start=240' videoTitle="YouTube video player" />
                            <p className='teamwork-content'>
                                Thats why, to be truly effective, growth teams require a diverse bunch of people with different and complementary skill sets (a cross-competence team). Growth teams also require clear goals to focus on the right things. In essence, growth teams are about winning the competition: to win you can't only follow the best practices and feed the google/fb algorithms because that is what everyone else is doing as well. You need to also innovate. That is what the growth team is for:<span className='teamwork-emphasis'> to make the company WIN.</span>
                            </p>
                            <p className='teamwork-content'>
                                My growth teams have typically followed the <span className='teamwork-emphasis'><a href='https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies-Breakout/dp/045149721X' target='_blank'>"Sean Ellis" playbook<FaExternalLinkAlt className='external-link' size={10} /></a></span> where the focus has been on high tempo testing process across the whole customer journey. I wrote <span className='teamwork-emphasis'><a href="https://www.linkedin.com/pulse/how-run-growth-team-aleksi-immonen/">this blog post<FaExternalLinkAlt className='external-link' size={10} /></a></span> about the topic, as a young and excited consultant, in the early 2018. The text is still somewhat valid, eventhough nowadays I tend to have a little bit more pragmatic approach to the job. Growth team doesn't solve all problems, growth teams can be organised in many different ways, <span className=''>and essentially the growth team just tries to fullfill the potential of the existing product/service.</span> Sometimes this aspiration can lead to extraordinary creativity and results.
                            </p>
                        </div>

                        <div className="section-item">
                            <h2 className="section-topic3">
                                5. Ecommerce leadership
                            </h2>
                        </div>
                        <div>
                        <div>
                            <p className='teamwork-content'>
                                After Grew I did a 6 month stint leading <span className='teamwork-emphasis'><a href='https://www.lumise.fi/'>Lumise's</a></span> auxilliary light webstore. My job was to help the company to improve their internal processes, solve business problems and set priorities for the development team.

                            </p>
                            <p className='teamwork-content'>
                                In addition, while I was there, Lumise released the <span className='teamwork-emphasis'><a href='https://valovelho.lumise.fi/fi'>Valovelho</a></span> application and I was responsible for its growth.
                            </p>

                            <p className='teamwork-content'>
                                Previously, I had never been solely an "ecommerce-leader", but it wasn't so difficult transition. Running an ecommerce store requires pretty wide skill set but this skill set consists mostly of "parts" that are common in all digital service development- and/or business cases. 
                            </p>     
                            <p className='teamwork-content'>
                                However, there are some peculiarities in ecommerce that makes it a little different. E.g. the importance of price knowledge/flexibility, -customer service, -customer reviews, -ecommerce platform knowledge, -product information management platform knowledge and also understanding the customer behaviour related to the specific category of products the webstore is selling. Lumise was also heavily depended on paid advertising and discount campaigns which had implications on how the marketing was done. 
                            </p> 
                            <p className='teamwork-content'>
                                The hardest thing about smallish ecommerce stores like Lumise (~10M € revenue) is actually the multiple systems that are needed to run the store, warehouse/logistics and other processes that have a tendency to escalate into complicated patchworks and increasingly bigger headaches. This is because as years go by and the more you develop/personalise a 'generic' ecommerce platform, the harder it becomes to maintain or develop it further. I.e. the technical debt keeps piling up. At some point you arrive to the intersection and you need to decide your direction: 1) scrap the whole system? 2) slow down development and handle technical debt? or 3) continue as you were (towards an even bigger mess)?.
                            </p>     
                            <p className='teamwork-content'>
                                <span className='teamwork-emphasis'>I believe that API-first architecture makes most sense for ecommerce businesses.</span> However, it is not realistic approach for small ecommerce companies due to the technical knowledge and development resources it requires.
                            </p>
                            <p className='teamwork-content'>
                                The Lumise development team and the whole company is a bunch of very skilled and nice guys and girls. Unfortunately, me being the only 100% remote worker 1000 km away from the office became a challenge. It is hard to lead if you are rarely present. Also, while we succeeded in many growth tactics and improving the development processes, the real acute need was in solving and patching together the ecommerce/product invetory systems. Which is not a part of my core skill set. 
                            </p>   

                        </div>
                        </div>

                        <div className="section-item">
                            <h2 className="section-topic3">
                                6. Communication skills
                            </h2>
                        </div>
                        <p className="teamwork-content">
                            I think that in the end, my strongest skill is communication. I like to write and speak. I will post more articles here soon.
                        </p>

                        
                        <div className="section-item">
                            <h2 className="section-topic3">
                                7. Coding skills
                            </h2>
                        </div>
                        <p className="teamwork-content">
                            Should product/growth person know how to code? Most people say no. However, I've seen with my own eyes, while doing product/growth work, how amazingly valuable it can be if you have a product/growth person who can also code. So, I've learned the coding stuff that is especially useful for a product/growth professional:
                        </p>
                        <p className="teamwork-content">
                            <span className="">Python</span>:
                            I have basic Python Skills. I can build Scrapy / Splash spiders and crawlers to automatically collect data and make them do work for me. I have also built various data collection scripts to get data from API's and other data spinning/engineering scripts (pandas, numpy).
                        </p>
                        <p className="teamwork-content">
                            <span className="">Javascript</span>: I can do basic stuff with Javascript as well. I've built two simple ReactNative apps using context and hooks. <span><a href="https://github.com/Aleksim">I have some of my projects in Github</a></span>. I've also built one React web app using redux. <span><a href="https://www.growthhackertools.io">Growth Hacker Tools</a></span> is a Gatsby app with dynamic react app embedded into it and buch of scrapers running in the background. I built this site with Gatsby as well.
                        </p>
                        <p className="teamwork-content">
                            <span className="">Html/css</span>: I can do all the basic things using HTML and CSS.
                        </p>
                        <p className="teamwork-content">
                            <span className="">SQL</span>: If needed, I can get my hands dirty and fetch stuff from sql/nosql.
                        </p>
                        <p className="teamwork-content">
                            <span className="">GraphQl</span>: Yes, I've suffered to learn this as well.
                        </p>
                        <p className="teamwork-content">
                            <span className="">GPT-3</span>: Not really a coding tool, but I understand the "psychology" and have built stuff with it.
                        </p>

                        <div className="section-item">
                            <h2 className="section-topic3">
                                8. Tools
                            </h2>
                        </div>

                        <p className="now-text">
                            There are lots of tools in the world and new tools are published everyday. I've even built <span className='teamwork-emphasis'><a href='https://www.growthhackertools.io/' target='_blank'>a service</a></span> for tracking newest martech tools. It is hard to even remember all the tools that I've used, but on the other hand, the ones I remember are probably the ones I am best equipped to use again:
                        </p>



                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Adobe Campaign</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Salesforce marketing cloud</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Pardot</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Adobe Target</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Optimizely, VWO, Optimize</span>: Hands on experience + coordination experience.
                        </p>

                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Google ads</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Twitter ads</span>: Mainly coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Facebook ads</span>: Hands on experience + coordination experience.
                        </p>

                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Reddit, snapchat, influencer, celebrity etc etc</span>: I've analyzed dozens of different medias as a potential media investment target.
                        </p>

                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Google analytics</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Google tag manager</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Adobe analytics</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Simple analytics</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Mixpanel</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Hotjar</span>: Hands on experience + coordination experience.
                        </p>

                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">AppsFlyer</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Branch</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Apptweak</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">SEMrush</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Ahrefs</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Custobar</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Google Search Console</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Serverside tag manager</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">Yotpo</span>: Hands on experience + coordination experience.
                        </p>
                        <p className="teamwork-content">
                            <span><FaCircle className='education-bullet2' size={8} /></span>
                            <span className="year">BigQuery</span>: Hands on experience + coordination experience.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
