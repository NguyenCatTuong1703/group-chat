import "./App.scss";
import SharedFlies from "components/sharedfiles";
import GroupChat from "components/GroupChat/GroupChat";

function App() {
  return (
    <div className="App">
      <div className="abc"></div>
      <GroupChat />
      <SharedFlies></SharedFlies>
    </div>
  );
}

export default App;
