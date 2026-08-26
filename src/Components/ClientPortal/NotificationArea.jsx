import { Card, Chip, Separator } from "@heroui/react";
import React from "react";
import { BiCheckDouble, BiSolidError } from "react-icons/bi";
import { MdAvTimer } from "react-icons/md";

const NotificationArea = () => {
  return (
    <Card className="w-full bg-white border" variant="secondary">
      <Card.Header>
        <Card.Title className="flex justify-between items-center ">
          <span>Notification & Alerts</span>
          <Chip color="danger">2 New</Chip>
        </Card.Title>
        <Separator className="my-5 bg-gray-200" />
        <div className="flex flex-col gap-4">
          <Card className="w-full bg-green-50 border" variant="secondary">
            <Card.Header>
              <Card.Title className="text-[16px] font-semibold">
                <div className="border w-fit bg-green-100 text-green-700 rounded-full p-1">
                  <BiCheckDouble />
                </div>
                Assests Updated
              </Card.Title>
              <Card.Description>
                New branding guidelines have been added to the project files.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className="w-full bg-red-50 border" variant="secondary">
            <Card.Header>
              <Card.Title className="text-[16px] font-semibold">
                <div className="border w-fit bg-red-100 text-red-700 rounded-full p-1">
                  <BiSolidError />
                </div>
                Design Review Overdue
              </Card.Title>
              <Card.Description>
                Your design review is overdue. Please submit your feedback.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className="w-full  border" variant="secondary">
            <Card.Header>
              <Card.Title className="text-[16px] font-semibold">
                <div className="border w-fit bg-gray-100 text-yellow-700 rounded-full p-1">
                  <MdAvTimer />
                </div>
                Server Maintenance
              </Card.Title>
              <Card.Description>
                Your design review is overdue. Please submit your feedback.
              </Card.Description>
            </Card.Header>
          </Card>
        </div>
      </Card.Header>
    </Card>
  );
};

export default NotificationArea;
