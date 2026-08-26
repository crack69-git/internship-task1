import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { AiFillEdit } from "react-icons/ai";

const ClientOverView = () => {
  return (
    <Card className="w-full col-span-3 bg-white border" variant="secondary">
      <Card.Header>
        <Card.Title className="flex justify-between items-center mb-5">
          <span className="text-lg">Client Overview</span>
          <AiFillEdit size={25} color="green" />
        </Card.Title>
        <div className="flex items-start gap-4">
          <div>
            <Image
              src="/profile.webp"
              alt="Client"
              width={300}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold">Client Name</h4>
            <p className="text-blue-600 font-semibold">
              Intern . Web Development
            </p>
            <div className="flex items-start gap-10 mt-4">
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
