"use client";
import { Button, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { MdArrowBack, MdDashboard, MdSearchOff } from "react-icons/md";

const notfound = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card
        className="
        relative w-full max-w-lg overflow-hidden
        border border-gray-200 bg-white p-6
        shadow-xl shadow-gray-200/60
        sm:p-10
      "
        variant="secondary"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-blue-100/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-44 rounded-full bg-purple-100/70 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Error label */}
          <span className="mb-5 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-600">
            404 ERROR
          </span>

          {/* Icon */}
          <div className="mb-5 flex size-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-8 ring-blue-50/50">
            <MdSearchOff size={42} />
          </div>

          {/* Content */}
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Page not found
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
            The page you are looking for may have been removed, renamed, or is
            temporarily unavailable.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onPress={() => router.back()}
            >
              <MdArrowBack size={19} />
              Go Back
            </Button>

            <Button
              className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto"
              onPress={() => router.push("/")}
            >
              <MdDashboard size={19} />
              Go to Dashboard
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default notfound;
