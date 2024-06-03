import { useState } from "react";
import {
  Drawer,
  Sidebar,
  TextInput,
  Navbar,
} from "flowbite-react";
import {
  HiSearch,
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import {  } from "react-icons/hi";
import { Link } from "react-router-dom";
import navImage from "../../assets/navbar/Group 93.png";

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

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
                  <Sidebar.Item href="/" icon={HiChartPie}>
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/e-commerce/products"
                    icon={HiShoppingBag}
                  >
                    Products
                  </Sidebar.Item>
                  <Sidebar.Item href="/users/list" icon={HiUsers}>
                    Users list
                  </Sidebar.Item>
                  <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                    Sign in
                  </Sidebar.Item>
                  <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                    Sign up
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item
                    href="https://github.com/themesberg/flowbite-react/"
                    icon={HiClipboard}
                  >
                    Docs
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="https://flowbite-react.com/"
                    icon={HiCollection}
                  >
                    Components
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="https://github.com/themesberg/flowbite-react/issues"
                    icon={HiInformationCircle}
                  >
                    Help
                  </Sidebar.Item>
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
                    <Sidebar.Item href="/" icon={HiChartPie}>
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/e-commerce/products"
                      icon={HiShoppingBag}
                    >
                      Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiUsers}>
                      Users list
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                      Sign in
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/authentication/sign-up"
                      icon={HiPencil}
                    >
                      Sign up
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                    >
                      Docs
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://flowbite-react.com/"
                      icon={HiCollection}
                    >
                      Components
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/issues"
                      icon={HiInformationCircle}
                    >
                      Help
                    </Sidebar.Item>
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
