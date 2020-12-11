                import React from 'react'
                import {Link} from 'gatsby'
                
                const Allposts = () => {
                    return (
                        <Link to={`/allposts/`}>
                            <div className="movetocenter">
                            <button className="button-gen button is-dark is-medium">
                                <span className="">
                                <strong>See All</strong>
                                </span>
                            </button>
                            </div>
                        </Link>
                    )
                }
                
                export default Allposts
                
            