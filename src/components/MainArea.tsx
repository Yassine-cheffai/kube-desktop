import { PodsList } from "./resources/Pods";
import { ServicesList } from "./resources/Services";
import { NameSpacesList } from "./resources/NameSpaces";
import { JobsList } from "./resources/Jobs";
import { CronJobsList } from "./resources/CronJobs";
import { ConfigMapsList } from "./resources/ConfigMaps";
import { SecretsList } from "./resources/Secrets";


const MainArea = () => {
  return (
    <div className="main_area">
      <div>main area</div>
      <PodsList />
      <hr />
      <ServicesList />
      <hr />
      <NameSpacesList />
      <hr />
      <JobsList />
      <hr />
      <CronJobsList />
      <hr />
      <ConfigMapsList />
      <hr />
      <SecretsList />
    </div>
  )
}

export default MainArea;