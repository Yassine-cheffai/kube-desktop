import { useState, useEffect } from "react";
import { Secret } from "../../types";
import { getSecrets } from "../../mocks";

export const SecretsList = () => {
  const [secrets, setSecrets] = useState<Secret[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setSecrets(getSecrets());
    setIsLoading(false);
  }, [])
  return (
    <>
      {isLoading ? "Loading" :
        <ul>
          {secrets.map((secret) => (<li>{secret.id} - {secret.name} - {secret.createdAt}</li>))}
        </ul>}
    </>
  )
}