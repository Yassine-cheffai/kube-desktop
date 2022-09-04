import { useState, useEffect } from "react";
import { CronJob } from "../../types";
import { getCronJobs } from "../../mocks";

export const CronJobsList = () => {
  const [cronJobs, setCronJobs] = useState<CronJob[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setCronJobs(getCronJobs());
    setIsLoading(false);
  }, [])
  return (
    <>
      {isLoading ? "Loading" :
        <ul>
          {cronJobs.map((cronJob) => (<li>{cronJob.id} - {cronJob.name} - {cronJob.createdAt}</li>))}
        </ul>}
    </>
  )
}