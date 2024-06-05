import { useEffect, useState } from "react";
import SingleProduct from "../../components/Home/BestSelling/SingleProduct";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/grocers/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <p className="text-center text-3xl text-[#3CB814] mb-5">Best Grocers</p>
      <p className="text-5xl font-bold text-center mb-8">Browser Our Grocers</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Shop;
