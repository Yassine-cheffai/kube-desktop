import {RESOURCES_TYPES} from "../types";

type SideBarProps = {
  selectedResource: string,
  setSelectedResource: (val: string) => void,
}
const SideBar = ({ selectedResource, setSelectedResource }: SideBarProps) => {
  return (
    <div className="SideBar">
      <ul className="SideBarList">
        {RESOURCES_TYPES.map((val, key) => (
          <li
            key={key}
            className="row"
            id={selectedResource === val ? "active" : ""}
            onClick={() => { setSelectedResource(val) }}
          >
            <div>{val}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default SideBar;