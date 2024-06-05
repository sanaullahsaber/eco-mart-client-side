import { Avatar, Dropdown, Navbar } from "flowbite-react";
import navImage from "../../assets/navbar/Group 93.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SearchBar from "../SearchMethod/SearchBar/SearchBar";
import SearchResultList from "../SearchMethod/SearchResultList/SearchResultList";

const NavBar = () => {
  const { logOut, user } = useAuth();
  const [results, setResults] = useState([]);

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar  fluid rounded className="bg-transparentBg">
          <Link to={"/"}>
            <Navbar.Brand>
              <img
                src={navImage}
                className="mr-3 h-6 sm:h-9"
                alt="Eco Mart Logo"
              />
            </Navbar.Brand>
          </Link>
          <div className="flex md:order-2 items-center space-x-4">
            {/* Search Method */}
            <div className="relative">
              <SearchBar setResults={setResults} />
              {results.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg z-50">
                  <SearchResultList results={results} />
                </div>
              )}
            </div>

            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={
                    user?.photoURL ||
                    "https://previews.123rf.com/images/lytasepta/lytasepta2303/lytasepta230300746/200964086-ic%C3%B4ne-de-l-utilisateur-en-illustration-vectorielle-de-style-plat-profil-sur-fond-blanc-isol%C3%A9-concept.jpg"
                  }
                  rounded
                />
              }
            >
              <Dropdown.Header>
                {user && (
                  <span className="block text-sm">{user?.displayName}</span>
                )}
                {user && (
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                )}
              </Dropdown.Header>
              {user && (
                <Dropdown.Item>
                  <Link to="/dashboard">Dashboard</Link>
                </Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item>
                <NavLink to={"/register"}>Register</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                {user ? (
                  <div onClick={handleLogOut} className="cursor-pointer">
                    Logout
                  </div>
                ) : (
                  <Link to="/login" className="cursor-pointer">
                    Login
                  </Link>
                )}
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-orange-400 underline"
                    : "text-lg text-white hover:text-orange-400 hover:underline"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </Navbar.Link>
            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-orange-400 underline"
                    : "text-lg text-white hover:text-orange-400 hover:underline"
                }
                to={"/shop"}
              >
                Shop
              </NavLink>
            </Navbar.Link>
            {user && (
              <Navbar.Link href="#">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-orange-400 underline"
                      : "text-lg text-white hover:text-orange-400 hover:underline"
                  }
                  to={"dashboard"}
                >
                  Dashboard
                </NavLink>
              </Navbar.Link>
            )}
            {/* <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-orange-400 underline"
                    : "text-lg text-white hover:text-orange-400 hover:underline"
                }
                to={"/product"}
              >
                Product
              </NavLink>
            </Navbar.Link> */}
            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-orange-400 underline"
                    : "text-lg text-white hover:text-orange-400 hover:underline"
                }
                to={"/blog"}
              >
                Blog
              </NavLink>
            </Navbar.Link>
            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-orange-400 underline"
                    : "text-lg text-white hover:text-orange-400 hover:underline"
                }
                to={"/contact"}
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
