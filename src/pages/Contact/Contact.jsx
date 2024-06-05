
const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions? Reach out to us!
        </p>
      </header>
      <section className="bg-white p-8 rounded-lg shadow-md max-w-lg">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p className="text-gray-700">No: 58 A, East Madison Street,</p>
          <p className="text-gray-700">Baltimore, MD</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">random@email.com</p>
          <p className="text-gray-700">+1 423-845-3579</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Hour of Operation</h2>
          <p className="text-gray-700">Mon – Fri: 08:30 – 20:00</p>
          <p className="text-gray-700">Sat & Sun: 09:30 – 21:30</p>
        </div>
      </section>
      <footer className="mt-8 text-gray-600 text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;