import userImg from "../../../public/images/user.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto banner-div flex flex-col items-center justify-between md:flex-row">
      <div className="max-w-[570px]">
        <h2 className="text-7xl font-bold">
          One Step Closer To Your{" "}
          <span className="text-[#9873FF]">Dream Job</span>
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn btn-primary bg-gradient border-white duration-700 text-white font-bold">
          Get Started
        </button>
      </div>
      <div>
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
