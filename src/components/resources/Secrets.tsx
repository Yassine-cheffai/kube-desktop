import { useState, useEffect } from "react";
import { Secret } from "../../types";
import { getSecrets } from "../../mocks";
import { invoke } from '@tauri-apps/api';

export const SecretsList = () => {
  const [secrets, setSecrets] = useState<Secret[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // setSecrets(getSecrets());
    invoke("get_secrets_command").then((response: any) => { setSecrets(response); setIsLoading(false) });
    setIsLoading(false);
  }, [])
  return (
    <div>
      {isLoading ? 'Loading...' :
        <table className="ResourceTable">
          <thead>
            <th>Name</th>
            <th>Type</th>
            <th>Data</th>
            <th>Age</th>
          </thead>
          <tbody>
            {secrets.map((secret) => (
              <tr>
                <td>{secret.name}</td>
                <td>{secret.type}</td>
                <td>{secret.data}</td>
                <td>{secret.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}