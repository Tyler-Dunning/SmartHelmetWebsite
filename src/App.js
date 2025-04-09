
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";


import Home from "./routes/Home";
import Login from "./routes/Login";
import HelmetView  from "./routes/HelmetView";
import SessionView from "./routes/SessionView";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route
          exact
          path="/home"
          element={<Home />}
        />

        <Route
          exact
          path="/"
          element={<Login />}
        />
        <Route
          exact
          path="/helmet"
          element={<HelmetView />}
        />
        <Route
          exact
          path="/session"
          element={<SessionView />}
        />
        {
          //Redirect all non-defined routes to "/" 
        }
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
    </Router>
  );
}

export default App;
