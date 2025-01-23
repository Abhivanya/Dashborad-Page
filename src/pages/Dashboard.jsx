import React, { useState } from "react";
import CampaignReport from "../components/dashboard/CamaignReport";
import Greeting from "../components/dashboard/Greeting";
import ClientInfo from "../components/dashboard/ClientInfo";
import CampaignStatus from "../components/dashboard/CamaignStatus";
import DashboardButtons from "../components/dashboard/DashboardButtons";
import DashboardChart from "../components/dashboard/DashboardChart";
import RoboImg from "../assets/robo.png";
const Dashboard = () => {
  const [activeDashboard, setActiveDashboard] = useState(5);

  const changeDashboard = (dashboardId) => {
    console.log(dashboardId, activeDashboard);
    if (dashboardId !== activeDashboard) {
      setActiveDashboard(dashboardId);
    }
  };
  return (
    <div className="relative">
      <div className="flex flex-col">
        <Greeting />
        <ClientInfo />
        <CampaignStatus />
        <DashboardButtons
          activeDashboard={activeDashboard}
          changeDashboard={changeDashboard}
        />
        {activeDashboard === 5 && (
          <div>
            <DashboardChart />
            <CampaignReport />
          </div>
        )}
        {activeDashboard !== 5 && (
          <div className="mt-10 mx-auto text-3xl">Blank Page</div>
        )}
      </div>
      <div className="fixed left-4 bottom-5  w-[100px]">
        <img src={RoboImg} />
      </div>
    </div>
  );
};

export default Dashboard;
