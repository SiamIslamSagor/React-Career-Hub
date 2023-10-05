import { useState } from "react";
import useAuth from "../../utility/useAuth";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    // crete user
    createUser(email, password)
      .then(result => console.log(result.user))
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
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
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
            name="password"
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
          <button className="btn btn-secondary">Register</button>
        </div>
        <div className="form-control mt-6 inline-block text-center">
          <button className="btn btn-success btn-sm">Login With Google</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
