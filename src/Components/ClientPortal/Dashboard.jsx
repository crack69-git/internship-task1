import { Label, SearchField, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import ClientOverView from "./ClientOverView";
import NotificationArea from "./NotificationArea";
import ProjectStatus from "./ProjectStatus";
import TaskProgress from "./TaskProgress";
import RecentActivities from "./RecentActivities";

const Dashboard = () => {
  return (
    <div className="py-4 w-11/12 mx-auto">
      <Separator className="my-5 bg-gray-200" />
      <div className="grid max-md:grid-cols-1 grid-cols-4 gap-4 ">
        <ClientOverView />
        <NotificationArea />
        <ProjectStatus />
        <TaskProgress />
        <RecentActivities />
      </div>
    </div>
  );
};

export default Dashboard;
