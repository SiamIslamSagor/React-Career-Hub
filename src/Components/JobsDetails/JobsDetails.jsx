import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobsDetails = () => {
  const { id } = useParams();

  const handleApplyJob = () => {
    saveJobApplication(id / 1);
    toast("You have applied successfully");
  };

  return (
    <div>
      <h2>Jobs Details of: {id}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Detail Coming Son</h2>
        </div>
        <div className="border">
          <h2>Side thing</h2>
          <button
            onClick={handleApplyJob}
            className="btn btn-primary bg-gradient border-white duration-700 text-white font-bold"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobsDetails;
