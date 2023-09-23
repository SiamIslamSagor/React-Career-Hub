import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Ops!!!</h1>
      <h2>Page Not Found;</h2>
      <Link to="/">
        <button>Go Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
