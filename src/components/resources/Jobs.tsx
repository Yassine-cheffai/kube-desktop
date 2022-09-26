import { useState, useEffect } from "react";
import { Job } from "../../types";
import { getJobs } from "../../mocks";
import { invoke } from '@tauri-apps/api';

export const JobsList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // setJobs(getJobs());
    invoke("get_jobs_command").then((response: any) => { setJobs(response); setIsLoading(false) });
    setIsLoading(false);
  }, [])
  return (
    <div>
      {isLoading ? 'Loading...' :
        <table className="ResourceTable">
          <thead>
            <th>Name</th>
            <th>Completions</th>
            <th>Duration</th>
            <th>Age</th>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr>
                <td>{job.name}</td>
                <td>{job.completions}</td>
                <td>{job.duration}</td>
                <td>{job.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}