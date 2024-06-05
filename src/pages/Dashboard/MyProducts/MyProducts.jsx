import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import useAuth from "../../../hooks/useAuth";

const MyProducts = () => {
  const { user } = useAuth();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://eco-mart-server-side.vercel.app/grocers/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-5xl font-bold text-center mb-8">My Add Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            onDelete={handleDelete}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
