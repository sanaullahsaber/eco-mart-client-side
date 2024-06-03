import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
 const { signIn, user } = useAuth();
 const navigate = useNavigate();
 const location = useLocation();

 const from = location?.state?.from?.pathname || "/";

 const handleSubmit = async (e) => {
   e.preventDefault();

   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;

   console.log(email, password);

   await signIn(email, password);
 };

 useEffect(() => {
   if (user) {
     navigate(from, { replace: true });
   }
 }, [user, from, navigate]);

  return (
    <div className="sm:px-6 lg:px-0 lg:my-24 sm:my-0 sm:mt-24 w-full">
      <Card className="max-w-sm mx-auto">
        <h1 className="text-center text-5xl font-bold ">Login Now</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" name="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <input
            type="submit"
            value="Login"
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
              Don&apos;t have an account?
            </span>
            <Link to="/register" className="text-green-700 font-bold ">
              Create an account
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
