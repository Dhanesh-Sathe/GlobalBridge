import React from "react";
import Header from './Components/Header.jsx'
import UserDashboard from "./Components/UserDashboard.jsx";
import Footer from './Components/Footer.jsx'

const Dashboard = () => {
    return (
      <div>
          <Header />
          <UserDashboard />
          <Footer />
      </div>
    )
  }
  
  export default Dashboard;