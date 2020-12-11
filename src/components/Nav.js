import React, {useState} from 'react'
import "../pages/mystyles.scss"


const Nav = () => {
  
  const [burger1, setBurger] = useState(false);
  const burger_value = burger1 ? 'is-active' : ''


    return (
      <nav className="navbar">
        <div className="container is-max-desktop">
          <div className="navbar-brand">
            <a className="navbar-item nav-name" href="/">
            Aleksi Immonen
            </a>
            <a onClick={()=>{
              setBurger(!burger1)  
            }} role="button" className={`navbar-burger ${burger_value}`}aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
            </div>
          <div className={`navbar-menu ${burger_value}`}>
            <div className="navbar-end">
                <a className="navbar-item nav-item" href="/posts">
                    Thoughts
                </a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Nav
