import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import "../../css/main.css"
import { MdDateRange } from "react-icons/md";



const Post = ({ frontmatter, excerpt }) => {

    const { title, image, author, slug, date, category, readTime } = frontmatter
    

    return (
<div className="">
  <div className="">

      <div className="posts-list">
        <div className="date-line">
                {date}               
        </div>
        <Link to={`/posts/${slug}`}>
          <p className="post-preview-title">
              <p className='section-topic'>{title}</p>
          </p>
        </Link>

      </div>

  </div>
</div>
    )
}

export default Post
