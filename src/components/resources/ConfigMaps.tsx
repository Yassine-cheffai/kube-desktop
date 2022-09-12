import { useState, useEffect } from "react";
import { ConfigMap } from "../../types";
import { getConfigMaps } from "../../mocks";

export const ConfigMapsList = () => {
  const [configMaps, setConfigMaps] = useState<ConfigMap[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setConfigMaps(getConfigMaps());
    setIsLoading(false);
  }, [])
  return (
    <>
      {isLoading ? "Loading" :
        <ul>
          {configMaps.map((configMap) => (<li>{configMap.id} - {configMap.name} - {configMap.createdAt}</li>))}
        </ul>}
    </>
  )
}