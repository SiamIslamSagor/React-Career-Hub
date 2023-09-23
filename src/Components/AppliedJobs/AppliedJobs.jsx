import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));
      console.log(jobs, storedJobIds, jobApplied);
    }
  }, []);
  return (
    <div>
      <h2>Jobs I applied</h2>
    </div>
  );
};

export default AppliedJobs;
