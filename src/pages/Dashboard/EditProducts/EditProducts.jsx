import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProducts = () => {
  const data = useLoaderData();
  const token = localStorage.getItem("token");

  const [name, setName] = useState(data.name);
  const [brand, setBrand] = useState(data.brand);
  const [price, setPrice] = useState(data.price);
  const [description, setDescription] = useState(data.description);
  const [image_url, setImageURL] = useState(data.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to add this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel",
    });

    if (!isConfirmed) {
      return; // Exit if user cancels confirmation
    }

    const dataAdd = { name, brand, price, description, image_url,};
    console.log(data);

    await fetch(`http://localhost:5000/grocers/${data?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataAdd),
    })
      .then((res) => res.json())
      .then(() => toast.success("Product edited successfully"));
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Add Grocery Item
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 mb-2">
              Grocery Item Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter grocery item name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="brand" className="text-gray-700 mb-2">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              defaultValue={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Enter brand name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image_url" className="text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              placeholder="Enter image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              style={{
                background:
                  "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
              }}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
