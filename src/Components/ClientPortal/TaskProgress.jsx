"use client";
import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Separator,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PieChartDefaultIndex from "./PieChartDefaultIndex";

const TaskProgress = () => {
  const [selected, setSelected] = useState(["Structure", "Config"]);
  const tasks = (
    <>
      <Checkbox value="Structure">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <span className="text-lg text-gray-600"> Define Web Structure</span>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="Config">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <span className="text-lg text-gray-600">Setup Tailwind Config.</span>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="Build Desktop and Mobile Layouts">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <span className="text-lg text-gray-600">
            Build Desktop and Mobile Layouts
          </span>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="Implement Mobile Navigation">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <span className="text-lg text-gray-600">
            Implement Mobile Navigation
          </span>
        </Checkbox.Content>
      </Checkbox>
    </>
  );
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = Object.fromEntries(formData.entries());
    console.log(task);
  };
  return (
    <div className="max-sm:col-span-4 col-span-2 row-span-2 h-full">
      <Card className="w-full h-full border bg-white p-5" variant="secondary">
        <Card.Header>
          <Card.Title className="flex justify-between items-center">
            <span className="font-semibold text-gray-600 text-[16px]">
              Task Progress
            </span>
            <Modal>
              <Button
                size="sm"
                variant="secondary"
                className="bg-green-100 text-green-700 rounded-md"
              >
                <FaPlus color="green" />
              </Button>
              <Modal.Backdrop>
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[360px]">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Icon className="bg-default text-foreground">
                        <FaPlus color="green" />
                      </Modal.Icon>
                      {/* <Modal.Heading>Add Task</Modal.Heading> */}
                    </Modal.Header>
                    <Modal.Body>
                      <Form
                        className="flex w-full flex-col gap-4"
                        onSubmit={onSubmit}
                      >
                        <TextField isRequired name="task" type="text">
                          <Input
                            placeholder="Enter task Title"
                            className="border border-gray-300"
                          />
                          <FieldError />
                        </TextField>

                        <div className="flex gap-2">
                          <Button type="submit" className="w-full">
                            Add Task
                          </Button>
                        </div>
                      </Form>
                    </Modal.Body>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          </Card.Title>
          <Separator className="my-3 bg-gray-200" />
          <div className="grid max-lg:grid-cols-1 grid-cols-2 items-center justify-between gap-2">
            <div className="mt-4 text-gray-600 text-[14px] flex flex-col gap-4">
              <CheckboxGroup
                value={selected}
                onChange={setSelected}
                name="interests"
              >
                {tasks}
              </CheckboxGroup>
            </div>
            <div className="flex items-center justify-center w-full">
              <PieChartDefaultIndex />
            </div>
          </div>
        </Card.Header>
      </Card>
    </div>
  );
};

export default TaskProgress;
