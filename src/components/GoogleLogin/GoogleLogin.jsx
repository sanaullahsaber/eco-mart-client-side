import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  
  return (
    <div
      className="rounded-lg"
      style={{
        background:
          "linear-gradient(91.13deg, rgb(32, 41, 42) -0.878%, rgb(57, 128, 77) 99.72%)",
      }}
    >
      <div className="btn text-white text-lg py-3 rounded-3xl cursor-pointer text-center flex justify-center items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </div>
  );
};

export default GoogleLogin;
