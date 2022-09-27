import { useState, useEffect } from "react";
import { CronJob } from "../../types";
import { getCronJobs } from "../../mocks";
import { invoke } from '@tauri-apps/api';

export const CronJobsList = () => {
  const [cronJobs, setCronJobs] = useState<CronJob[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // setCronJobs(getCronJobs());
    invoke("get_cronjobs_command").then((response: any) => { setCronJobs(response); setIsLoading(false) });
    setIsLoading(false);
  }, [])
  return (
    <div>
      {isLoading ? 'Loading...' :
        <table className="ResourceTable">
          <thead>
            <th>Name</th>
            <th>Last successful time</th>
            <th>Last schedule time</th>
          </thead>
          <tbody>
            {cronJobs.map((cronJob) => (
              <tr>
                <td>{cronJob.name}</td>
                <td>{cronJob.last_successful_time}</td>
                <td>{cronJob.last_schedule_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}