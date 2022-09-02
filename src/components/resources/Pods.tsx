import { useState, useEffect } from "react";

import { invoke } from '@tauri-apps/api';

export const PodsList = () => {
  const [pods, setPods] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    invoke("get_pods_command").then((response: any) => { setPods(response); setIsLoading(false) });
  }, [])
  return (
    <>
      {isLoading ? 'Loading...' :
        <ul>
          {
            pods.map((pod) => (
              <li>
                {pod}
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

