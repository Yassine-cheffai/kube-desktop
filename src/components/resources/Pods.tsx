import { useState, useEffect } from "react";
import { invoke } from '@tauri-apps/api';
import { getPods } from "../../mocks";
import { Pod } from "../../types";


export const PodsList = () => {
  const [pods, setPods] = useState<Pod[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    // invoke("get_pods_command").then((response: any) => { setPods(response); setIsLoading(false) });
    setPods(getPods());
    setIsLoading(false);
  }, [])
  return (
    <div>
      {isLoading ? 'Loading...' :
        <table className="ResourceTable">
          <thead>
            <th>Name</th>
            <th>Ready</th>
            <th>Status</th>
            <th>Restarts</th>
            <th>Age</th>
            <th>IP</th>
            <th>Node</th>
            <th>Nominated Node</th>
            <th>Readiness Gates</th>
          </thead>
          <tbody>
            {pods.map((pod) => (
              <tr>
                <td>{pod.name}</td>
                <td>{pod.ready}</td>
                <td>{pod.status}</td>
                <td>{pod.restarts}</td>
                <td>{pod.age}</td>
                <td>{pod.ip}</td>
                <td>{pod.node}</td>
                <td>{pod.nominated_node}</td>
                <td>{pod.readiness_gates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

