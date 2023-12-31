import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              {" "}
              <li>
                <a>Home</a>
              </li>
            </Link>
            <li>
              <a>Members Information</a>
            </li>
            <Link to="/customerInfo">
              <li>
                <a>Trading</a>
              </li>
            </Link>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-base text-emerald-800">
          <img src="/image/logo.png" alt="" height="40px" width="40px" />{" "}
          ক্ষুদ্র-সঞ্চয়
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-amber-950">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            {" "}
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link to="/basicInfo">
            <li>
              <a>Members Information</a>
            </li>
          </Link>
          <Link to="/customerInfo">
            <li>
              <a>Trading</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/entryForm">
          {" "}
          <a className="btn btn-ghost normal-case text-base text-emerald-800">
            Add New Member
          </a>
        </Link>{" "}
        <br />
      </div>
    </div>
  );
};

export default Navbar;
