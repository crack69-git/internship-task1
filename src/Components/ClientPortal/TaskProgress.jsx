"use client";
import {
  Card,
  Checkbox,
  CheckboxGroup,
  Description,
  Label,
  Separator,
} from "@heroui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TaskProgress = () => {
  const [selected, setSelected] = useState(["Structure", "Config"]);
  const tasks = (
    <>
      <Checkbox value="Structure">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Define Web Structure
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="Config">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Setup Tailwind Config.
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="Build Desktop and Mobile Layouts">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Build Desktop and Mobile Layouts
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="Implement Mobile Navigation">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Implement Mobile Navigation
        </Checkbox.Content>
      </Checkbox>
    </>
  );
  return (
    <div className=" col-span-2 row-span-2">
      <Card className="w-full border bg-white p-5" variant="secondary">
        <Card.Header>
          <Card.Title className="flex justify-between items-center">
            <span className="font-semibold text-gray-600 text-[16px]">
              Task Progress
            </span>
            <div className="bg-green-100 p-1 rounded-md">
              <FaPlus color="green" />
            </div>
          </Card.Title>
          <Separator className="my-3 bg-gray-200" />
          <div className="mt-4 text-gray-600 text-[14px] flex flex-col gap-4">
            <CheckboxGroup
              value={selected}
              onChange={setSelected}
              name="interests"
            >
              {tasks}
            </CheckboxGroup>
          </div>
        </Card.Header>
      </Card>
    </div>
  );
};

export default TaskProgress;
