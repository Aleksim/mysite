import React from 'react'
import "../css/main.css"
import "../pages/mystyles.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
  {
    pic: file(relativePath: { eq: "gas_station.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
 }
`

const Imagehero = () => {
    const data = useStaticQuery(getImages)

    return (
        <div className="image-style">
            <Image
                className="image box"
                style={{
                    width:"100%",
                    marginLeft: "5px",
                    marginRight: "5px",
                }}
                fluid={data.pic.childImageSharp.fluid}
            />
        </div>
    )
}

export default Imagehero
