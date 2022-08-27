import './App.css';


const SideBar = () => {
  return (
    <div className='side_bar'>
      <ul className='resources'>
        <li>
          Services
        </li>
        <li>
          Pods
        </li>
        <li>
          Jobs
        </li>
        <li>
          CronJobs
        </li>
        <li>
          NameSpaces
        </li>
        <li>
          Configs
        </li>
        <li>
          SecretMaps
        </li>
      </ul>
    </div>
  )
}
function App() {
  return (
    <SideBar />
  );
}

export default App;
