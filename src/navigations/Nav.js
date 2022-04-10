import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChartBar,
  faGear,
  faUsers,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { getToken } from "../utils/token";

const Nav = () => {
  const navigate = useNavigate();
  const token = getToken();
  const [adminPermission, setAdminPermission] = useState(false);

  //Step 1. Another way to link somewhere
  const location = useLocation();
  // console.log(location.pathname)

  function active(paths) {
    let flag = false;
    for (let index = 0; index < paths.length; index++) {
      const path = paths[index];
      location.pathname.includes(path) ? (flag = true) : (flag = false);
      if (flag) return "active";
    }
    return "icon";
  }

  useEffect(() => {
    let user = jwtDecode(token);
    if (user.user_role === 3) {
      console.log("Welcome administrator!");
      setAdminPermission(true);
    } else {
      setAdminPermission(false);
    }
    navigate({ pathname: "./cars/" });
  }, []);

  return (
    <div className="navigation">
      <Outlet />
      {adminPermission ? (
        <div className="navigation__nav-bar__admin">
          <Link to={"./cars/"}>
            <FontAwesomeIcon
              className={active(["/cars", "/carsRegister", "/carsConfirm"])}
              icon={faCar}
            />
          </Link>
          <Link to={"./runs/"}>
            <FontAwesomeIcon
              className={active([
                "/runs",
                "/runsList",
                "/runsUpload",
                "/sensorEdit",
                "engAnalysis",
                "analysis",
              ])}
              icon={faChartBar}
            />
          </Link>
          <Link to={"./community/"}>
            <FontAwesomeIcon
              className={active(["/community"])}
              icon={faUsers}
            />
          </Link>
          <Link to={"./admin/"}>
            <FontAwesomeIcon className={active(["/admin"])} icon={faUserPen} />
          </Link>
          <Link to={"./settings/"}>
            <FontAwesomeIcon
              className={active([
                "/settings",
                "contact",
                "review",
                "changePassword",
                "logout",
              ])}
              icon={faGear}
            />
          </Link>
        </div>
      ) : (
        <div className="navigation__nav-bar">
          <Link to={"./cars/"}>
            <FontAwesomeIcon
              className={active(["/cars", "/carsRegister", "/carsConfirm"])}
              icon={faCar}
            />
          </Link>
          <Link to={"./runs/"}>
            <FontAwesomeIcon
              className={active([
                "/runs",
                "/runsList",
                "/runsUpload",
                "/sensorEdit",
                "engAnalysis",
                "analysis",
              ])}
              icon={faChartBar}
            />
          </Link>
          <Link to={"./community/"}>
            <FontAwesomeIcon
              className={active(["/community"])}
              icon={faUsers}
            />
          </Link>
          <Link to={"./settings/"}>
            <FontAwesomeIcon
              className={active([
                "/settings",
                "contact",
                "review",
                "changePassword",
                "logout",
              ])}
              icon={faGear}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
