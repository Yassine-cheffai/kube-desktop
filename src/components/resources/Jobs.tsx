import { useState, useEffect } from "react";
import { Job } from "../../types";
import { getJobs } from "../../mocks";

export const JobsList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setJobs(getJobs());
    setIsLoading(false);
  }, [])
  return (
    <>
      {isLoading ? "Loading" :
        <ul>
          {jobs.map((job) => (<li>{job.id} - {job.name} - {job.createdAt}</li>))}
        </ul>}
    </>
  )
}