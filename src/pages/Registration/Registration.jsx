import { Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Registration = () => {
  return (
    <div className="sm:px-6 lg:px-0 lg:my-24 sm:my-0 sm:mt-24 w-full">
      <Card className="max-w-sm mx-auto">
        <h1 className="text-center text-5xl font-bold ">Register Now</h1>
        <form className="flex flex-col gap-4">
          {/* name field */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" value="Your Name" />
            </div>
            <TextInput id="name1" type="text" placeholder="Name" required />
          </div>
          {/* email field */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="Email" required />
          </div>
          {/* password field */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          {/* confirm password field */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="confirm_password1"
                value="Your confirm password"
              />
            </div>
            <TextInput id="confirm_password1" type="password" required />
          </div>

          <input
            type="submit"
            value="Register"
            className="btn text-white text-lg py-3 rounded-md cursor-pointer"
            style={{
              background:
                "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
            }}
          />
          <div className="mt-6">
            <GoogleLogin />
          </div>
          <div className="my-2">
            <span className="text-base font-semibold">
              Already have an account?
            </span>
            <Link to="/login" className="text-green-700 font-bold ">
              Login Now
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Registration;
