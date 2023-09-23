const Job = ({ job }) => {
  const { logo, job_title } = job;
  return (
    <div>
      <h2>{job_title}</h2>
      <img src={logo} alt="" />
    </div>
  );
};

export default Job;
