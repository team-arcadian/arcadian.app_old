import Router from "preact-router";
import Home from "./components/home";

const App = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};

export default App;
