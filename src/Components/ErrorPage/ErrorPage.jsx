import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex  justify-center items-center">
      <div className="flex flex-col items-center bg-base-200 border-4 p-20 rounded-lg gap-4">
        <h1>Ops!!!</h1>
        <h2>Page Not Found;</h2>
        <Link to="/">
          <button className="btn btn-primary">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
