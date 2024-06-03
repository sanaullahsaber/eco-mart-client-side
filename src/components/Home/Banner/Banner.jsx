import { Button } from "flowbite-react";
import bannerImage from "../../../assets/banner/Group 68.png";

const Banner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
      }}
      className="pt-20"
    >
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="max-w-md text-center lg:text-left ">
            <p className="text-3xl font-semibold leading-9 uppercase text-[#FFFFFD] pb-4">
              Online Grocery
            </p>
            <h1 className="text-5xl font-bold leading-10 capitalize text-[#FFFFFD] pb-5">
              Get fresh Groceries
            </h1>
            <p className="text-2xl font-medium leading-7 text-[#FFFFFD] pb-8">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
            <Button className="block mx-auto lg:mx-0 mb-5" style={{ background: "rgb(255, 124, 4)" }}>Shop Now</Button>
          </div>
          <div className="shrink-0 mb-6 lg:mb-0">
            <img
              src={bannerImage}
              className="w-full h-auto max-w-3xl mx-auto"
              alt="Online Grocery Banner image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
