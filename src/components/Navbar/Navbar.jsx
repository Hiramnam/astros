import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import './NavBar.css';

const NAV_IMG_URL = "https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png"
const INICIO_URL = 'http://192.168.100.6:8888/';  

const NavBar = ({links, isLogged}) => {

    const navLinks = links.map( link => (
      <NavLink
            to={link.link}
            key={link.name}
        >
            {link.name}
        </NavLink>
    ));

    return(
        <nav className="navbar">
            <div className="nav--container">
                <div className="nav--left">
                    <NavLink to={INICIO_URL} exact>
                        <img src={NAV_IMG_URL} alt="space-logo"/>
                        <h1 className="nav--title">Space-app</h1>
                    </NavLink>
                </div>
            
                <div className="nav--right">
                    <div className='nav--links'>
                        {
                            isLogged ? (
                                navLinks 
                            ) : (
                                <NavLink to ={INICIO_URL} exact activeClassName="active">
                                    <LoginIcon/>
                                </NavLink>
                            )}
                    
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;