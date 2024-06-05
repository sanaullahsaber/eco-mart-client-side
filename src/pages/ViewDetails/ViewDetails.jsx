import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const details = useLoaderData();
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={details.image_url}
              alt={details.name}
              className="max-w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold mb-4">{details.name}</h1>
            <div className="flex items-center mb-4">
              <p className="text-gray-600 mr-4">Brand:</p>
              <p className="text-gray-800">{details.brand}</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-600 mr-4">Price:</p>
              <p className="text-gray-800">${details.price}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Description:</h2>
              <p className="text-gray-800">{details.description}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 mr-4">Seller Email:</p>
              <p className="text-gray-800">{details.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;