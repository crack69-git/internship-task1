import { Card, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { AiFillEdit } from "react-icons/ai";

const ClientOverView = () => {
  return (
    <Card
      className="w-full max-sm:col-span-4 max-lg:col-span-2 col-span-3 bg-white border p-10"
      variant="secondary"
    >
      <Card.Header>
        <Card.Title className="flex justify-between items-center ">
          <span className="text-xl">Client Overview</span>
          <AiFillEdit size={25} color="green" />
        </Card.Title>
        <Separator className="my-5" />
        <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-4 max-lg:text-center">
          <div className="col-span-1 flex items-center justify-center">
            <Image
              src="/profile.webp"
              alt="Client"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg max-lg:w-[200px] max-lg:h-[200px] w-[300px] h-auto"
            />
          </div>
          <div className=" col-span-2 flex flex-col gap-2">
            <h4 className="text-xl font-bold">Client Name</h4>
            <p className="text-blue-600 font-semibold">
              Intern . Web Development
            </p>
            <div className="flex flex-wrap max-lg:items-center max-lg:justify-center items-start max-lg:gap-5 gap-10 mt-4">
              <div>
                <p className="font-semibold">Level</p>
                <p>Intermediate</p>
              </div>
              <div>
                <p className="font-semibold">Skills</p>
                <p>JavaScript, React, Node.js</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4 line-clamp-3 mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              eaque impedit voluptatem quod repellendus fugiat fugit consectetur
              perspiciatis distinctio, ad optio asperiores. Expedita, accusamus
              sed natus dolores neque tempora magni.
            </p>
          </div>
        </div>
      </Card.Header>
    </Card>
  );
};

export default ClientOverView;
