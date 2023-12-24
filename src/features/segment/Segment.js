import React, { useState } from "react";
import Title from "../../ui/Title";
import { Box, Button, Drawer } from "@mui/material";
import AsideSchema from "./AsideSchema";

export default function Segment() {
  const [canOpenSchema, setCanOpenSchema] = useState(true);
  function handleSave() {
    setCanOpenSchema((prevSchema) => (console.log(prevSchema), !prevSchema));
  }
  return (
    <div>
      <Title>View Audience</Title>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Button variant="outlined" onClick={handleSave}>
          Save segment
        </Button>
        <Drawer open={canOpenSchema} anchor="right">
          <AsideSchema onCancel={handleSave} />
        </Drawer>
      </Box>
    </div>
  );
}
