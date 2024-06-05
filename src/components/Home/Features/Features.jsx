import imgBg from "../../../assets/our-services/Rectangle 22.png";
import img1 from "../../../assets/our-services/layer1.png";
import img2 from "../../../assets/our-services/Group.png";
import img3 from "../../../assets/our-services/save 1.png";
import img4 from "../../../assets/our-services/Group 152.png";
import { Card } from "flowbite-react";


const Features = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imgBg})`,
          backgroundSize: "75% auto",
          backgroundPosition: "center",
        }}
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="text-2xl font-semibold leading-8 uppercase text-center pt-14">
          Features
        </p>
        <h3 className="text-5xl font-bold text-center my-5">What You Get</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="col my-10">
            <Card className="relative max-w-xs sm:max-w-sm">
              <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
                <img
                  className="rounded-full bg-orange-400 p-2 w-16 h-16"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="pt-16">
                {/* Add padding to push down the text */}
                <h5 className="capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  authentic product
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </Card>
          </div>

          <div className="col my-10">
            <Card className="relative max-w-xs sm:max-w-sm">
              <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
                <img
                  className="rounded-full bg-orange-400 p-2 w-16 h-16"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="pt-16">
                {/* Add padding to push down the text */}
                <h5 className="capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  competitive price
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </Card>
          </div>

          <div className="col my-10">
            <Card className="relative max-w-xs sm:max-w-sm">
              <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
                <img
                  className="rounded-full bg-orange-400 p-2 w-16 h-16"
                  src={img3}
                  alt=""
                />
              </div>
              <div className="pt-16">
                {/* Add padding to push down the text */}
                <h5 className="capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  authentic product
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-40">
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default Features;
