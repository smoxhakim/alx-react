import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
function App() {
  return (
    <React.Fragment>
      <Notification />
      <div className="app">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
