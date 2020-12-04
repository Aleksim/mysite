import React from 'react'
import "../css/main.css"


const Now = () => {
    return (
        <div className="section">
            <div className="container movetocenter">
               
                    <div className="section-style">
                    <h2 className="now-style">
                        Now
                    </h2>
                    <p className="now-text">
                        Co-founder at <span><a href="https://www.grew.dev">Grew</a></span>. We are a team of three guys with complimentary skills and experience working with each other. Our main focus is currently on <span><a href="https://www.pointng.io">pointNG</a></span> - Secure Geolocation Detection Without Sending Coordinate Data to 3rd Parties - but we like to do sideprojects as well.
                    </p>
                    <p className="now-text2">
                        At grew I do business development, ideation, research, writing, coding, animation and so on. We embrace our generalist skillsets and that is what makes us special. For us it is more important to <span style={{fontWeight:"600"}}>create and build good enough fast</span> than perfect and slow.
                    </p>
                    <p className="now-text2">
                        I am also the creator of <span><a href="https://www.growthhackertools.io">Growth Hacker Tools</a></span>.
                    </p>
                    </div>
              
            </div>
        </div>
    )
}

export default Now
