import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <div className="mt-22 ml-20">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:otherPages" element={<PendingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

const PendingPage = () => {
  const { otherPages } = useParams();
  return (
    <div className="flex flex-col gap-3 items-center h-full w-full my-10 mx-auto">
      <h1>{otherPages} Page Not Found</h1>
      <Link
        to="/"
        className="px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-600"
      >
        Go To Home
      </Link>
    </div>
  );
};
