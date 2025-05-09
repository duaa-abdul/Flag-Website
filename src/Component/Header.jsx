import React from 'react'
import style from '../Component/Header.module.css'



const Header = ({ setSearchQuery }) => {
    return (
    <>
    <nav className={style.Navbar}>
        <div>
            <h2>WorldFlag</h2>
        </div>
        <div className= {style.search}>
            <input type="text" placeholder='Serach here'   onChange={(e) => setSearchQuery(e.target.value)} />
        
        </div>

    </nav>
    </>
  )
}

export default Header
