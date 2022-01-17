import { Outlet, Link } from "react-router-dom";
import { Menu, Sidebar } from 'semantic-ui-react'

const Layout = () => {
  return (
    <>
    <Sidebar  as={Menu} icon='labeled' teal vertical visible 
            direction='left' width='thin'>    <div teal className="ui inverted purple">
    <Menu.Item as={Link} to='/doctors'>Doctors</Menu.Item>
    <Menu.Item as={Link} to='/procedures'>Procedures</Menu.Item>
    <Menu.Item as={Link} to='/register'>Register</Menu.Item>  
    
      </div>
      </Sidebar>

      <Outlet/>
    </>
  )
};

export default Layout;