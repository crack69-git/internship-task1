import { Button, Drawer, SearchField, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDashboard, MdMenu } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  const placements = "left";
  return (
    <Drawer>
      <Button variant="ghost" isIconOnly className="hover:bg-gray-700">
        <MdMenu size={24} color="white" />
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog className="h-full w-80 max-w-[85vw] bg-[#0F172A]">
            <Drawer.CloseTrigger />

            <Drawer.Header className="sr-only">
              <Drawer.Heading className="text-white">
                Navigation menu
              </Drawer.Heading>
            </Drawer.Header>

            <Drawer.Body className="p-0">
              <div>
                <div className="flex items-center gap-3 text-white">
                  <div>
                    <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
                  </div>
                  <div>
                    <h6 className="text-lg font-bold">Agency</h6>
                    <p className="text-sm text-gray-400 font-semibold">
                      Client Portal
                    </p>
                  </div>
                </div>
                <SearchField name="search" className="max-md:block mt-5">
                  <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input
                      className="w-full"
                      placeholder="Search..."
                    />
                    <SearchField.ClearButton />
                  </SearchField.Group>
                </SearchField>
                <Separator className="my-5 bg-gray-500" />

                <div className="flex flex-col items-startmt-5  flex-grow">
                  <Link
                    href="#"
                    className="text-lg text-white bg-blue-600 w-full p-2 rounded-md flex items-center gap-2"
                  >
                    <MdDashboard size={25} />
                    Dashboard
                  </Link>
                </div>
              </div>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};

export default Sidebar;
