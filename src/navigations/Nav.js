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
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const params = useParams();
  const token = params.token;
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
    navigate({ pathname: "./cars/" + token });
  }, []);

  return (
    <div className="navigation">
      <Outlet />
      {adminPermission ? (
        <div className="navigation__nav-bar">
          <Link to={"./cars/" + token}>
            <FontAwesomeIcon
              className={active(["/cars", "/carsRegister", "/carsConfirm"])}
              icon={faCar}
            />
          </Link>
          <Link to={"./runs/" + token}>
            <FontAwesomeIcon
              className={active(["/runs", "/runsList", "/runsUpload"])}
              icon={faChartBar}
            />
          </Link>
          <Link to={"./community/" + token}>
            <FontAwesomeIcon
              className={active(["/community"])}
              icon={faUsers}
            />
          </Link>
          <Link to={"./settings/" + token}>
            <FontAwesomeIcon className={active(["/settings"])} icon={faGear} />
          </Link>
        </div>
      ) : (
        <div className="navigation__nav-bar__admin">
          <Link to={"./cars/" + token}>
            <FontAwesomeIcon
              className={active(["/cars", "/carsRegister", "/carsConfirm"])}
              icon={faCar}
            />
          </Link>
          <Link to={"./runs/" + token}>
            <FontAwesomeIcon
              className={active(["/runs", "/runsList", "/runsUpload"])}
              icon={faChartBar}
            />
          </Link>
          <Link to={"./community/" + token}>
            <FontAwesomeIcon
              className={active(["/community"])}
              icon={faUsers}
            />
          </Link>
          <Link to={"/admin/userManagement"}>
            <FontAwesomeIcon className={active(["/admin"])} icon={faUserPen} />
          </Link>
          <Link to={"./settings/" + token}>
            <FontAwesomeIcon className={active(["/settings"])} icon={faGear} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
