import {Menu} from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';
const NavBar=()=>{
    return(
        <div>
            <Menu borderless fixed='top'>
                <Menu.Item>
                    <img src={logo} alt="logo" style={{width: 60}}/>
                </Menu.Item>
                <Menu.Item name="Home" as={Link} to="/"/>
                <Menu.Item name="Recipes" as={Link} to="/recipes"/>
            </Menu>
        </div>
    )
}
export default NavBar;