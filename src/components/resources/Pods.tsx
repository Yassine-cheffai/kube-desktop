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
    <>
      {isLoading ? 'Loading...' :
        <ul>
          {
            pods.map((pod) => (
              <li>
                {pod.id} - {pod.name} - {pod.createdAt}
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

