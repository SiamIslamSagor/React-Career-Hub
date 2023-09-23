import PropTypes from "prop-types";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
          <button className="btn bg-white text-[#7E90FE] px-5 py-2 font-extrabold rounded duration-700 border-white hover:border-[#7E90FE] hover:bg-white">
            {remote_or_onsite}
          </button>
          <button className="btn bg-white text-[#7E90FE] px-5 py-2 font-extrabold rounded duration-700 border-white hover:border-[#7E90FE] hover:bg-white">
            {job_type}
          </button>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary hover:bg-[#556bff] duration-700 text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
