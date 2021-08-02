import "./App.css";
import TaskPanel from "./componants/TaskPanel/TaskPanel";
import Header from "./componants/Header/Header";
import ProContainer from "./componants/Profile/ProContainer";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProContainer />
        <div className="scroll-down"></div>
        <br />
        <hr />
        <TaskPanel />
      </div>
    </Provider>
  );
}

export default App;
