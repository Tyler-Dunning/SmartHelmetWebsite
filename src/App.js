
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";


import Home from "./routes/Home";
import Login from "./routes/Login";


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
