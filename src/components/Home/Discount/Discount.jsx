import { Button } from "flowbite-react";
import img1 from "../../../assets/our-services/Group 66.png";
import img2 from "../../../assets/our-services/Rectangle 21.png";

const Discount = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div
          style={{
            backgroundImage: `url(${img1})`,
            borderRadius: "10px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="col flex flex-col justify-center items-start text-white p-4 h-64 sm:h-72 md:h-80 lg:h-96"
        >
          <p className="text-2xl font-semibold uppercase mb-4">
            <strong className="text-lime-700">Enjoy 30% off</strong>
          </p>
          <p className="lg:text-2xl text-lg font-bold text-black mb-4">
            Fresh fruits are collected <br /> from gardens
          </p>
          <Button
            className="lg:mx-0 mb-5"
            style={{ background: "rgb(255, 124, 4)" }}
          >
            Shop Now
          </Button>
        </div>
        <div
          style={{
            backgroundImage: `url(${img2})`,
            borderRadius: "10px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="col flex flex-col justify-center items-center text-white p-4 h-64 sm:h-72 md:h-80 lg:h-96"
        >
          <div className="text-center max-w-xs mx-auto">
            <p className="text-3xl font-semibold uppercase mb-4">
              <strong>Enjoy 30% off</strong>
            </p>
            <p className="mb-4 lg:text-2xl text-lg font-bold">
              Fresh fruits are collected from gardens
            </p>
            <p className="mb-4 text-xl font-normal text-[#D9D9D9]">
              There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain
            </p>
            <Button className="mb-5" style={{ background: "rgb(255, 124, 4)" }}>
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
