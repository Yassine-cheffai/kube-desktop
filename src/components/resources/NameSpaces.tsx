import { useState, useEffect } from "react";
import { NameSpace } from "../../types";
import { getNameSpaces } from "../../mocks";

export const NameSpacesList = () => {
  const [nameSpaces, setNameSpaces] = useState<NameSpace[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setNameSpaces(getNameSpaces());
    setIsLoading(false);
  }, [])
  return (
    <>
      {isLoading ? "Loading" :
        <ul>
          {nameSpaces.map((nameSpace) => (<li>{nameSpace.id} - {nameSpace.name} - {nameSpace.createdAt}</li>))}
        </ul>}
    </>
  )
}