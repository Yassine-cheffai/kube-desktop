import { PodsList } from "./resources/Pods";
import { ServicesList } from "./resources/Services";
import { NameSpacesList } from "./resources/NameSpaces";
import { JobsList } from "./resources/Jobs";
import { CronJobsList } from "./resources/CronJobs";
import { ConfigMapsList } from "./resources/ConfigMaps";
import { SecretsList } from "./resources/Secrets";

type MainAreaProps = {
  selectedResource: string;
}

const MainArea = ({selectedResource}: MainAreaProps) => {
  return (
    <div className="MainArea">
      {selectedResource === "Services" ? <ServicesList />: ""}
      {selectedResource === "Pods" ? <PodsList />: ""}
      {selectedResource === "Jobs" ? <JobsList />: ""}
      {selectedResource === "CronJobs" ? <CronJobsList />: ""}
      {selectedResource === "NameSpaces" ? <NameSpacesList />: ""}
      {selectedResource === "Configs" ? <ConfigMapsList />: ""}
      {selectedResource === "SecretMaps" ? <SecretsList />: ""}
    </div>
  )
}

export default MainArea;