import { useState, useEffect } from "react";
import { Service } from "../../types";
import { getServices } from "../../mocks";
// import { invoke } from '@tauri-apps/api';

export const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setServices(getServices());
    // invoke("get_services_command").then((response: any) => { setServices(response); setIsLoading(false) });
    setIsLoading(false);
  }, [])
  return (
    <div>
      {isLoading ? 'Loading...' :
        <table className="ResourceTable">
          <thead>
            <th>Name</th>
            <th>Type</th>
            <th>Cluster ip</th>
            <th>External ip</th>
            <th>Age</th>
            <th>Selector</th>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr>
                <td>{service.name}</td>
                <td>{service.type}</td>
                <td>{service.cluster_ip}</td>
                <td>{service.external_ip}</td>
                <td>{service.age}</td>
                <td>{service.selector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}