import { useState, useEffect } from "react";
import { Service } from "../../types";
import { getServices } from "../../mocks";

export const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setServices(getServices());
    setIsLoading(false);
  }, [])
  return (
    <>
      {isLoading ? "Loading" :
        <ul>
          {services.map((service) => (<li>{service.id} - {service.name} - {service.createdAt}</li>))}
        </ul>}
    </>
  )
}