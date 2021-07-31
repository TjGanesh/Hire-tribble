import "./App.css";
import TaskPanel from "./componants/TaskPanel/TaskPanel";
import Landing from "./componants/Header/Header";
import ProContainer from "./componants/Profile/ProContainer";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Landing />
        <ProContainer />
        <br />
        <br />
        <br />
        <TaskPanel />
      </div>
    </Provider>
  );
}

export default App;
