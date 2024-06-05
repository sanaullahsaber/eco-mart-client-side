import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const BestSelling = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://eco-mart-server-side.vercel.app/grocers/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <p className="text-center text-3xl text-[#3CB814] mb-5">Best selling</p>
      <p className="text-5xl font-bold text-center mb-8">Browser Our Hottest</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 12).map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
