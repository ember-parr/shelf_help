import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { ToastContainer } from "react-toastify";
import AppHeader from "./components/AppHeader"
import "./Styles/App.css"
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" hideProgressBar />
      <UserProfileProvider>
        <Router>
          <AppHeader /> 
          <ApplicationViews />
          {/* <Footer /> */}
        </Router>
      </UserProfileProvider>
    </div>
  );
}

export default App;