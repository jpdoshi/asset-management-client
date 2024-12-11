import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Teams from "./pages/Teams";
import Users from "./pages/Users";
import Requests from "./pages/Requests";
import Footer from "./components/Footer";
import AssetsDetails from "./pages/AssetsDetails";
import UserDeatils from "./pages/UserDeatils";
import TeamDetails from "./pages/TeamDetails";
import NotFound from "./pages/NotFound";

import Cookies from "js-cookie";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";

const App = () => {
  const userId = Cookies.get("user_id");
  // const userRole = Cookies.get("user_role");
  const userRole = "User";

  return userId && typeof userId != "undefined" ? (
    <BrowserRouter>
      <Navbar />
      {userRole == "Admin" ? (
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Assets />} path="/assets" />
          <Route element={<AssetsDetails />} path="/assets/:slug" />
          <Route element={<Teams />} path="/teams" />
          <Route element={<TeamDetails />} path="/teams/:slug" />
          <Route element={<Users />} path="/users" />
          <Route element={<UserDeatils />} path="/users/:slug" />
          <Route element={<Requests />} path="/requests" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      ) : (
        <Routes>
          <Route element={<UserDashboard />} path="/" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  ) : (
    <Login />
  );
};

export default App;
