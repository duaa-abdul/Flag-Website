import React , {useState }from 'react'
import Header from './Header'
import { Outlet , useLocation  } from 'react-router-dom'


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
 </>
  )
}

export default Layout
