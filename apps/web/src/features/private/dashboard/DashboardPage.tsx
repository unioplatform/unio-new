import React from "react";
import ProfileCard from "./Widgets/Profile/ProfileCard";
import WeatherWidget from "./Widgets/Profile/WeatherWidget";
import CalendarWidget from "./Widgets/Insights/CalendarWidget";
import NewsWidget from "./Widgets/Insights/NewsWidget";
import ActivityWidget from "./Widgets/Insights/ActivityWidget";
import CreativeTechDeck from "./Widgets/Workspace/CreativeTechDeck";
import AiSidebar from "./Widgets/AiAssistant/AiSidebar";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex gap-6 flex-1 min-h-0">
        
        {/* ⬅️ LEFT: MAIN CONTENT */}
        <div className="flex-1 flex flex-col gap-6 min-h-0">
          
          {/* Top Row */}
          <div className="grid grid-cols-3 gap-6 h-[170px] shrink-0">
            <div className="col-span-2">
              <ProfileCard />
            </div>
            <div className="col-span-1">
              <WeatherWidget />
            </div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-3 gap-6 h-[300px] shrink-0">
            <CalendarWidget />
            <NewsWidget />
            <ActivityWidget />
          </div>

          {/* Bottom Row */}
          <CreativeTechDeck />
        </div>

        {/* ➡️ RIGHT: AI SIDEBAR */}
        <AiSidebar />

      </div>
    </div>
  );
}