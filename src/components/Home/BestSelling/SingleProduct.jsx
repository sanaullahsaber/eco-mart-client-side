/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { _id, name, price, image_url } = product;
  return (
    <div>
      <Card
        className="max-w-sm"
        renderImage={() => <img src={image_url} alt="image 1" />}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex justify-between">
          <p className="font-normal text-[#FF7C04] dark:text-gray-400">
            <strong>৳{price}</strong>
          </p>

          <div>
            <Link
              style={{
                background:
                  "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
              }}
              to={`/view-details/${_id}`}
              className="inline-flex items-center rounded-lg bg-green-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              View Details
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleProduct;
