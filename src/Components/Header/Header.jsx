import { Link } from "react-router-dom";
import useAuth from "../../utility/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <li>
        <Link className="p-0" to="/">
          <button className="btn bg-white text-[#7E90FE] px-5 py-2 font-extrabold rounded duration-700 border-white  hover:border-[#7E90FE] hover:bg-white">
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link className="p-0" to="applied">
          <button className="btn bg-white text-[#7E90FE] px-5 py-2 font-extrabold rounded duration-700 border-white  hover:border-[#7E90FE] hover:bg-white">
            Applied Jobs
          </button>
        </Link>
      </li>
      <li>
        <Link className="p-0" to="/blogs">
          <button className="btn bg-white text-[#7E90FE] px-5 py-2 font-extrabold rounded duration-700 border-white hover:border-[#7E90FE] hover:bg-white">
            Blogs
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary bg-gradient border-white duration-700 text-white font-bold"
          >
            LogOut
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-primary bg-gradient border-white duration-700 text-white font-bold">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary bg-gradient border-white duration-700 text-white font-bold">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
