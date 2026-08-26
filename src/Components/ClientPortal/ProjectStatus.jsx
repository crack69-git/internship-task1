import { Card, Chip, Label, ProgressBar } from "@heroui/react";
import Link from "next/link";
import React from "react";

const ProjectStatus = () => {
  return (
    <div className=" col-span-2 row-span-4">
      <Card className="w-full border bg-white" variant="secondary">
        <Card.Header>
          <Card.Title className="flex justify-between items-center">
            <span className="font-semibold text-gray-600 text-[16px]">
              Project Status
            </span>
            <Link href="#" className="text-blue-500 hover:underline">
              View All
            </Link>
          </Card.Title>
          <div className="mt-4 text-gray-600 text-[14px] flex flex-col gap-4">
            <Card
              className="w-full  rounded-md bg-white shadow-sm"
              variant="secondary"
            >
              <Card.Header>
                <Card.Title className="flex justify-between items-center">
                  <p className="text-lg font-bold">Responsive Web App</p>
                  <Chip
                    color="success"
                    className="rounded-md text-green-600 bg-green-50 border border-green-200"
                  >
                    Completed
                  </Chip>
                </Card.Title>
                <Card.Description className="text-gray-600 line-clamp-2">
                  Building a responsive web application using React and Tailwind
                  CSS.
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <ProgressBar
                  aria-label="Progress"
                  className="w-full"
                  value={100}
                >
                  <Label>Progress</Label>
                  <ProgressBar.Output />
                  <ProgressBar.Track>
                    <ProgressBar.Fill className="bg-green-600" />
                  </ProgressBar.Track>
                </ProgressBar>
              </Card.Content>
            </Card>
            <Card
              className="w-full  rounded-md bg-white shadow-sm"
              variant="secondary"
            >
              <Card.Header>
                <Card.Title className="flex justify-between items-center">
                  <p className="text-lg font-bold">Marketing Site Redesign</p>
                  <Chip
                    color="warning"
                    className="rounded-md text-yellow-600 bg-yellow-50 border border-yellow-200"
                  >
                    Overdue
                  </Chip>
                </Card.Title>
                <Card.Description className="text-gray-600 line-clamp-2">
                  Redesigning the marketing website to improve user experience
                  and conversion rates.
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <ProgressBar
                  aria-label="Progress"
                  className="w-full"
                  value={100}
                >
                  <Label>Progress</Label>
                  <ProgressBar.Output />
                  <ProgressBar.Track>
                    <ProgressBar.Fill className="bg-yellow-400" />
                  </ProgressBar.Track>
                </ProgressBar>
              </Card.Content>
            </Card>
          </div>
        </Card.Header>
      </Card>
    </div>
  );
};

export default ProjectStatus;
