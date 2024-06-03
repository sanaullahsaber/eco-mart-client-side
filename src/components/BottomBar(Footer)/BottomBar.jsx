import { Footer } from "flowbite-react";
import {  BsFacebook,  BsInstagram,  BsLinkedin, BsPinterest } from "react-icons/bs";
// import { MdMailOutline } from "react-icons/md";
import navImage from "../../assets/navbar/Group 93.png";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
      }}
      className="mt-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        <Footer container className="bg-transparentBg">
          <div className="w-full">
            <div className="grid w-full items-center justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand src={navImage} alt="Footer Logo" />
                <p className="lg:w-80 text-2xl font-medium leading-10 capitalize text-[#FFFFFD] pb-5">
                  This book is a treatise on the theory of ethics, very popular
                  during the Rena issance Ipsum
                </p>
                <div className="my-4 flex space-x-6 sm:mt-0 sm:justify-center lg:justify-start">
                  <BsFacebook size={24} className="text-[#1877F2]" />
                  <BsInstagram size={24} className="text-[#E1306C]" />
                  <Link to="">
                    <BsLinkedin size={24} className="text-[#0077B5]" />
                  </Link>
                  <BsPinterest size={24} className="text-[#E60023]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title
                    title="Quick link"
                    className="text-[#FFFFFD] text-2xl"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Home
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Shop
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Product
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Blog
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Contact
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title
                    title="USEFUL LINKS"
                    className="text-[#FFFFFD] text-2xl"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Returns
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Terms & Conditions
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Latest News
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      Our Sitemap
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title
                    title="Contact us"
                    className="text-[#FFFFFD] text-2xl"
                  />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      random@email.com
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      +1 423-845-3579
                    </Footer.Link>
                    <Footer.Link href="#" className="text-[#FFFFFD] text-2xl">
                      No: 58 A, East Madison Street, Baltimore, MD,
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright
                href="#"
                className="text-[#FFFFFD] text-base"
                by="ECO MART GROCERY STORE. All rights reserved"
                year={2022}
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <BsFacebook size={24} className="text-[#1877F2]" />
                <BsInstagram size={24} className="text-[#e1306b99]" />
                <Link to="">
                  <BsLinkedin size={24} className="text-[#0076b5]" />
                </Link>
                <BsPinterest size={24} className="text-[#e60023af]" />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default BottomBar;