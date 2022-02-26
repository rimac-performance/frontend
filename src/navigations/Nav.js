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

  function active(paths) {
    let flag = false;
    for (let index = 0; index < paths.length; index++) {
      const path = paths[index];
        location.pathname === path ? flag = true : flag = false;
        if (flag) return "active";
    }
    return "icon";
  }

  return (
    <div className="navigation">
      <Outlet />
      <div className="navigation__nav-bar">
        <Link to={"/cars"}>
          <FontAwesomeIcon className={active(["/cars"])} icon={faCar} />
        </Link>
        <Link to={"/runs"}>
          <FontAwesomeIcon className={active(["/runs", "/runsList"])} icon={faChartBar} />
        </Link>
        <Link to={"/community"}>
          <FontAwesomeIcon className={active(["/community"])} icon={faUsers} />
        </Link>
        <Link to={"/settings"}>
          <FontAwesomeIcon className={active(["/settings"])} icon={faGear} />
        </Link>
      </div>
      {/*<div onClick={() => navigate('/')}>noice</div>*/}
      {/*Step 2. Another way to link somewhere*/}
    </div>
  );
};

export default Nav;
