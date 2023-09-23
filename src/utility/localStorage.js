//
//
const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};
const saveJobApplication = id => {
  const storedJobApplication = getStoredJobApplication();
  const isExist = storedJobApplication.find(jobId => jobId === id);
  if (!isExist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredJobApplication, saveJobApplication };
