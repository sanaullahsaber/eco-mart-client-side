import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userInfo)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            toast.success("Google Login Successfully")
            navigate(from, {replace: true})
          });
      }
    });
  };

  return (
    <div
      className="rounded-lg"
      style={{
        background:
          "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
      }}
    >
      <div
        onClick={handleGoogleSignIn}
        className="btn text-white text-lg py-3 rounded-3xl cursor-pointer text-center flex justify-center items-center gap-2"
      >
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </div>
  );
};

export default GoogleLogin;
