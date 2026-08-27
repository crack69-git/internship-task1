import { Button, Drawer, SearchField, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboard, MdMenu } from "react-icons/md";
import Sidebar from "../Shared/Sidebar";

const NavbarSection = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" w-11/12 mx-auto py-3 flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Sidebar />
          <h3 className="text-xl font-bold">Client Dashboard</h3>
        </div>
        <div className="flex items-center gap-4">
          <SearchField name="search" className="max-md:hidden">
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
    </div>
  );
};

export default NavbarSection;
