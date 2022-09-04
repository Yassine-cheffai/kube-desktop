import { PodsList } from "./resources/Pods";
import { ServicesList } from "./resources/Services";
import { NameSpacesList } from "./resources/NameSpaces";


const MainArea = () => {
  return (
    <div className="main_area">
      <div>main area</div>
      <PodsList />
      <hr />
      <ServicesList />
      <hr />
      <NameSpacesList />
    </div>
  )
}

export default MainArea;