import React , {useState }from 'react'
import Header from './Header'
import { Outlet , useLocation  } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  return (
   <>
   <Header  setSearchQuery={setSearchQuery} />
   {location.pathname === '/' ? (
        <Outlet context={{ searchQuery }} />
      ) : (
        <Outlet />
      )};
       <Footer/>
 </>
  )
}

export default Layout
