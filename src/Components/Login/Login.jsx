import { useState } from "react";
import useAuth from "../../utility/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);

  const { googleSignIn, logIn } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    // crete user
    logIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  // login with google
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        navigate("/");
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="card-body">
        {error && (
          <h2 className="text-red-500 font-medium">
            ERR: {error.slice(15, error.length)}
          </h2>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="form-control mb-6  flex items-center text-center">
        <button
          onClick={handleGoogleLogIn}
          className="btn w-[200px] btn-success btn-sm"
        >
          Login With Google
        </button>
      </div>
      <p className="text-center my-5 font-medium">
        Do not have an account ? Please{" "}
        <Link className="text-blue-500 underline" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
