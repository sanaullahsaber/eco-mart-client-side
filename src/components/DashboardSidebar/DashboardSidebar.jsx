import { useState } from "react";
import { Drawer, Sidebar, TextInput, Navbar } from "flowbite-react";
import {
  HiSearch,
  HiHome,

  HiLogin,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import {} from "react-icons/hi";
import { Link } from "react-router-dom";
import navImage from "../../assets/navbar/Group 93.png";
import useAuth from "../../hooks/useAuth";

const DashboardSidebar = () => {
  const { logOut, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <>
      {/* Navbar for Small Screens */}
      <div className="md:hidden">
        <div>
          <Navbar fluid rounded className="bg-gray-200">
            <Link to={"/"}>
              {" "}
              {/* Move the menu icon to the right */}
              <Navbar.Brand>
                <img
                  src={navImage}
                  className="mr-3 h-6 sm:h-9"
                  alt="Eco Mart Logo"
                />
              </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">
              <button onClick={() => setIsOpen(true)} className="md:hidden">
                <Navbar.Toggle />
              </button>
            </div>
          </Navbar>
        </div>
      </div>

      {/* Sidebar for Larger Screens */}
      <div className="hidden md:block">
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="w-64 fixed top-0 left-0 h-full"
        >
          <div className="flex h-full flex-col justify-between py-2">
            <div>
              <form className="pb-3 md:hidden">
                <TextInput
                  icon={HiSearch}
                  type="search"
                  placeholder="Search"
                  required
                  size={32}
                />
              </form>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="/" icon={HiHome}>
                    Home
                  </Sidebar.Item>

                  <Sidebar.Item
                    href="/dashboard/my-products"
                    icon={HiShoppingBag}
                  >
                    My Products
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/dashboard/add-products"
                    icon={HiShoppingBag}
                  >
                    Add Products
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/dashboard/profile-management"
                    icon={HiUsers}
                  >
                    Profile Management
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  {user && (
                    <Sidebar.Item icon={HiLogin} onClick={handleLogOut}>
                      Log out
                    </Sidebar.Item>
                  )}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </div>
          </div>
        </Sidebar>
      </div>

      {/* Drawer for Smaller Screens */}
      <Drawer
        open={isOpen}
        onClose={handleClose}
        placement="left"
        className="md:hidden"
      >
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiHome}>
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/dashboard/my-products"
                      icon={HiShoppingBag}
                    >
                      My Products
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/dashboard/add-products"
                      icon={HiShoppingBag}
                    >
                      Add Products
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/dashboard/profile-management"
                      icon={HiUsers}
                    >
                      Profile Management
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    {user && (
                      <Sidebar.Item icon={HiLogin} onClick={handleLogOut}>
                        Log out
                      </Sidebar.Item>
                    )}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default DashboardSidebar;
