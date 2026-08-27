"use client";
import { Card, Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const RecentActivities = () => {
  return (
    <div className="max-sm:col-span-4 col-span-2 row-span-2 h-full">
      <Card className="w-full h-full border bg-white" variant="secondary">
        <Card.Header>
          <Card.Title className="flex justify-between items-center">
            <span className="font-semibold text-gray-600 text-[16px]">
              Recent Activities
            </span>
            <Link href="#" className="text-blue-500 hover:underline">
              View All
            </Link>
          </Card.Title>
          <Separator className="my-2" />
          <div className="w-full overflow-hidden text-start">
            <Timeline
              position="right"
              sx={{
                width: "100%",
                margin: 0,
                padding: 0,

                // Force every activity to have the same width
                "& .MuiTimelineItem-root": {
                  width: "100%",
                  minHeight: "65px",
                },

                // Remove MUI's invisible opposite-content space
                "& .MuiTimelineItem-root::before": {
                  display: "none",
                },

                // Control text spacing
                "& .MuiTimelineContent-root": {
                  minWidth: 0,
                  flex: 1,
                  padding: "4px 8px 10px 12px",
                  overflowWrap: "anywhere",
                },

                // Control dot spacing
                "& .MuiTimelineDot-root": {
                  margin: "6px 0",
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="flex flex-col gap-1">
                  <span>You marked 'Setup Tailwind Config' as complete.</span>
                  <span className="text-gray-500 text-[12px]">
                    10 minutes ago
                  </span>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="flex flex-col gap-1">
                  <span>
                    System generated new workspace for 'Dashboard Concept'.
                  </span>
                  <span className="text-gray-500 text-[12px]">
                    56 minutes ago
                  </span>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent className="flex flex-col gap-1">
                  <span>Sarah Jenkins uploaded UI_Assets_v2.zip</span>
                  <span className="text-gray-500 text-[12px]">2 hours ago</span>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </Card.Header>
      </Card>
    </div>
  );
};

export default RecentActivities;
