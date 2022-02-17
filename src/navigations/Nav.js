import {Link, Outlet} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Nav = () => {
    // const navigate = useNavigate();
    //Step 1. Another way to link somewhere

  return (
    <div>
        Navigation
        <Link to={'/'}>
            <div>Home</div>
        </Link>
        <Link to={'/cars'}>
            <div>Cars</div>
        </Link>
        <Link to={'/analysis'}>
            <div>Analysis</div>
        </Link>
        <Link to={'/community'}>
            <div>Community</div>
        </Link>
        <Link to={'/settings'}>
            <div>Settings</div>
        </Link>

        {/*<div onClick={() => navigate('/')}>noice</div>*/}
        {/*Step 2. Another way to link somewhere*/}

    <Outlet />
    </div>
  )
}

export default Nav
