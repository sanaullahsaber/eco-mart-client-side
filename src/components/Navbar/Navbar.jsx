import { Avatar, Dropdown, Navbar } from "flowbite-react";
import navImage from "../../assets/navbar/Group 93.png"
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { logOut, user } = useAuth();

  const handleLogOut = async () => {
    await logOut()
  }
  return (
    <div
      style={{
        background:
          "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <Navbar fluid rounded className="bg-transparentBg">
          <Link to={"/"}>
            <Navbar.Brand>
              <img
                src={navImage}
                className="mr-3 h-6 sm:h-9"
                alt="Eco Mart Logo"
              />
            </Navbar.Brand>
          </Link>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={
                    user?.photoURL ||
                    "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  }
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="dashboard">Dashboard</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <NavLink to={"register"}>Register</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                {user ? (
                  <div onClick={handleLogOut} className="cursor-pointer">
                    Logout
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="cursor-pointer">
                      Login
                    </Link>
                  </>
                )}
              </Dropdown.Item>
              {/* <Dropdown.Item>
                {user && (
                  <button
                    onClick={handleLogOut}
                    className="btn bg-red-500 text-white hidden lg:block"
                  >
                    Logout
                  </button>
                )}
              </Dropdown.Item> */}
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 underline" : ""
                }
                to={"/"}
              >
                Home
              </NavLink>
            </Navbar.Link>

            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 underline" : ""
                }
                to={"shop"}
              >
                Shop
              </NavLink>
            </Navbar.Link>

            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 underline" : ""
                }
                to={"dashboard"}
              >
                Dashboard
              </NavLink>
            </Navbar.Link>
            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 underline" : ""
                }
                to={"product"}
              >
                Product
              </NavLink>
            </Navbar.Link>

            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 underline" : ""
                }
                to={"blog"}
              >
                Blog
              </NavLink>
            </Navbar.Link>

            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 underline" : ""
                }
                to={"contact"}
              >
                Contact
              </NavLink>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
