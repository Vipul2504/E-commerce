import { Outlet, Link} from "react-router-dom";
import "./navigation.styles.scss"
import { ReactComponent as CrwnLogo}  from '../../assets/crown.svg';
import { useContext } from "react";
import { UserContext } from "../../contexts/user.contex";
import { signOutUSer } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

    return (
      <>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
           {
            currentUser ? (
              <span className="nav-link" onClick={signOutUSer}>SIGNOUT</span>
           ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
            )
           } 
          </div>
        </div>
        <Outlet />
      </>
    );
  };
  

export default Navigation;