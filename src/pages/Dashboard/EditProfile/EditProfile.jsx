import { useLoaderData } from "react-router-dom";

const EditProfile = () => {
  const data = useLoaderData();
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const imageURL = form.imageURL.value;
    const new_password = form.new_password.value;
    const confirm_password = form.confirm_password.value;
    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    console.log("edit hoitases", name, imageURL, new_password, confirm_password, age, mobileNumber);

    
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Edit Profile</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data?.email}
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            disabled
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="imageURL"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            placeholder="imageURL"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Existing form fields */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="new_password"
          >
            New Password
          </label>
          <input
            type="password"
            id="new_password"
            name="new_password"
            placeholder="New Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="confirm_password"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm New Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Age"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="mobileNumber"
          >
            Mobile
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            style={{
              background:
                "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
            }}
            type="submit"
            value="Update Profile"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;