import { Label, SearchField, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import ClientOverView from "./ClientOverView";
import NotificationArea from "./NotificationArea";

const Dashboard = () => {
  return (
    <div className="pt-4 w-11/12 mx-auto">
      <div className="flex items-center justify-between ">
        <h3 className="text-xl font-bold">Client Dashboard</h3>
        <div className="flex items-center gap-4">
          <SearchField name="search">
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                className="w-[280px]"
                placeholder="Search..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <IoMdNotificationsOutline size={25} />
          <Image
            src="/profile.webp"
            alt="User"
            width={40}
            height={40}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <Separator className="my-5 bg-gray-200" />
      <div className="grid grid-cols-4 gap-4">
        <ClientOverView />
        <NotificationArea />
      </div>
    </div>
  );
};

export default Dashboard;
