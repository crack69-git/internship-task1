import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {" "}
      <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
        <CircularProgress size="3rem" aria-label="Loading…" />
      </Stack>
    </div>
  );
};

export default loading;
