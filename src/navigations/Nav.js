import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChartBar,
  faGear,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
// import { useNavigate } from "react-router-dom";

const Nav = () => {
  // const navigate = useNavigate();
  //Step 1. Another way to link somewhere
  const location = useLocation();
  // console.log(location.pathname)

  function active(path) {
    return location.pathname === path ? "active" : undefined;
  }

  return (
    <div className="navigation">
      <Outlet />
      <div className="navigation__nav-bar">
        <Link to={"/cars"} className={"link"}>
          <FontAwesomeIcon className={`icon ${active("/cars")}`} icon={faCar} />
        </Link>
        <Link to={"/analysis"} className={"link"}>
          <FontAwesomeIcon
            className={`icon ${active("/analysis")}`}
            icon={faChartBar}
          />
        </Link>
        <Link to={"/community"} className={"link"}>
          <FontAwesomeIcon
            className={`icon ${active("/community")}`}
            icon={faUsers}
          />
        </Link>
        <Link to={"/settings"} className={"link"}>
          <FontAwesomeIcon
            className={`icon ${active("/settings")}`}
            icon={faGear}
          />
        </Link>
      </div>
      {/*<div onClick={() => navigate('/')}>noice</div>*/}
      {/*Step 2. Another way to link somewhere*/}
    </div>
  );
};

export default Nav;
