import {Link, Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCar, faChartBar, faUsers, faGear } from '@fortawesome/free-solid-svg-icons'
import "./nav.css"
// import { useNavigate } from "react-router-dom";

const Nav = () => {
    // const navigate = useNavigate();
    //Step 1. Another way to link somewhere

  return (
    <div className="navigation">
        Navigation
        <div className="navigation__nav-bar">
            <Link to={'/'}>
                <div>Home</div>
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to={'/cars'}>
                <div>Cars</div>
                <FontAwesomeIcon icon={faCar} />
            </Link>
            <Link to={'/analysis'}>
                <div>Analysis</div>
                <FontAwesomeIcon icon={faChartBar} />
            </Link>
            <Link to={'/community'}>
                <div>Community</div>
                <FontAwesomeIcon icon={faUsers} />
            </Link>
            <Link to={'/settings'}>
                <div>Settings</div>
                <FontAwesomeIcon icon={faGear} />
            </Link>
        </div>


        {/*<div onClick={() => navigate('/')}>noice</div>*/}
        {/*Step 2. Another way to link somewhere*/}

    <Outlet />
    </div>
  )
}

export default Nav
