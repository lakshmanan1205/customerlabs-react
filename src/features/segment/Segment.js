import React, { useState } from "react";
import Title from "../../ui/Title";
import { Box, Button, Drawer } from "@mui/material";
import AsideSchema from "./AsideSchema";
import { useDispatch } from "react-redux";
import { reset } from "./schemaSlice";

export default function Segment() {
  const [canOpenSchema, setCanOpenSchema] = useState(false);
  const dispatch = useDispatch();
  function handleSave() {
    setCanOpenSchema((prevSchema) => !prevSchema);
  }
  function handleCancel() {
    setCanOpenSchema(false);
    dispatch(reset());
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
          <AsideSchema onCancel={handleCancel} />
        </Drawer>
      </Box>
    </div>
  );
}
