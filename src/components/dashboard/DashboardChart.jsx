import React from "react";
import CampaignChart from "./CampaignChart";
import SocialMediaEngagement from "./SocialMediaEngagement";

const DashboardChart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between  m-4 gap-8 bg-inherit">
      <div className="flex-1">
        <CampaignChart />
      </div>
      <div className="flex-1 ">
        <SocialMediaEngagement />
      </div>
    </div>
  );
};

export default DashboardChart;
