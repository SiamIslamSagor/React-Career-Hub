import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { list } from "postcss";
import { FiFilter } from "react-icons/fi";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        job => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        job => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-3xl">Jobs I applied: {appliedJobs.length}</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">
          <FiFilter></FiFilter> filter
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("All")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("Onsite")}>
            <a>OnSite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map(job => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name}: {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
