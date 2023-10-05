import useAuth from "../../utility/useAuth";

const Login = () => {
  const { googleSignIn } = useAuth();
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(result => console.log(result.user))
      .catch(error => console.log(error));
  };
  return (
    <div className="container mx-auto">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
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
        <div className="form-control mt-6 inline-block text-center">
          <button
            onClick={handleGoogleLogIn}
            className="btn btn-success btn-sm"
          >
            Login With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
