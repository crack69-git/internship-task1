import { Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-72 min-h-screen p-4 bg-[#0F172A] ">
      <div className="flex items-center gap-3 text-white">
        <div>
          <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
        </div>
        <div>
          <h6 className="text-lg font-bold">Agency</h6>
          <p className="text-sm text-gray-400 font-semibold">Client Portal</p>
        </div>
      </div>
      <Separator className="my-5 bg-gray-500" />
      <h3 className="text-lg text-white bg-blue-600 p-2 rounded-md flex items-center gap-2">
        <MdDashboard />
        Dashboard
      </h3>
      <div className="flex flex-col items-start mt-5 space-y-5 flex-grow"></div>
      <div>logout</div>
    </div>
  );
};

export default Sidebar;
