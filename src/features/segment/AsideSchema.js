import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import Title from "../../ui/Title";

const SELECT = 1;
const FIRSTNAME = 2;
const LASTNAME = 3;
const GENDER = 4;
const AGE = 5;
const ACCOUNTNAME = 6;
const CITY = 7;
const STATE = 8;

const schemaOptions = [
  {
    label: "Add schema to segment",
    value: SELECT,
  },
  {
    label: "First Name",
    value: FIRSTNAME,
  },
  {
    label: "Last Name",
    value: LASTNAME,
  },
  {
    label: "Gender",
    value: GENDER,
  },
  {
    label: "Age",
    value: AGE,
  },
  {
    label: "Account Name",
    value: ACCOUNTNAME,
  },
  {
    label: "City",
    value: CITY,
  },
  {
    label: "State",
    value: STATE,
  },
];

export default function AsideSchema({ onCancel }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:960px)"
  );
  return (
    <Stack
      sx={{
        maxWidth: isSmallScreen ? "300px" : isMediumScreen ? "500px" : "700px",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Title>Saving Segment</Title>
      <Container sx={{ overflowY: "auto" }}>
        <Stack rowGap={2} sx={{ marginTop: "16px" }}>
          <Typography variant="body1">Enter the Name of the Segment</Typography>
          <TextField label="Name of the segment" size="small" />
          <Typography variant="body2">
            To save your segment, you need to add the schemas tp build the query
          </Typography>
          {/* TRAITS */}
          <Stack direction="row" alignItems="center" justifyContent="end">
            <Typography variant="caption" sx={{ marginRight: "8px" }}>
              <CircleIcon color="success" fontSize="12px" /> - User Traits
            </Typography>
            <Typography variant="caption">
              <CircleIcon color="error" fontSize="12px" /> - Group Traits
            </Typography>
          </Stack>
          {/* SELECTED SCHEMAS */}
          <Box
            sx={{
              border: "2px solid #339af0",
              padding: !isSmallScreen ? "16px 8px" : "16px 2px",
            }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="space-around"
              rowGap={2}
              mb={2}
            >
              <Grid item xs={1}>
                <CircleIcon color="success" fontSize="10px" />
              </Grid>
              <Grid item xs={9}>
                <TextField label="First Name" size="small" fullWidth />
              </Grid>
              <Grid item xs={2} justifyContent="end">
                {" "}
                <button
                  style={{
                    border: "1px solid #339af0",
                    backgroundColor: "#d0ebff",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    width: "80%",
                    marginLeft: "3px",
                  }}
                >
                  -
                </button>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent="space-around"
              rowGap={2}
            >
              <Grid item xs={1}>
                <CircleIcon color="error" fontSize="10px" />
              </Grid>
              <Grid item xs={9}>
                <TextField label="Account Name" size="small" fullWidth />
              </Grid>
              <Grid item xs={2} justifyContent="end">
                {" "}
                {/* <Button variant="outlined">{String.fromCharCode(45)}</Button> */}
                <button
                  style={{
                    border: "1px solid #339af0",
                    backgroundColor: "#d0ebff",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    width: "80%",
                    marginLeft: "3px",
                  }}
                >
                  -
                </button>
              </Grid>
            </Grid>
          </Box>
          {/* UNSELECTED SCHEMAS */}

          <Box>
            <Grid
              container
              alignItems="center"
              justifyContent="space-around"
              rowGap={2}
              padding="6px"
            >
              <Grid item xs={1}>
                <CircleIcon color="disabled" fontSize="10px" />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="Add schema to segment"
                  size="small"
                  select
                  fullWidth
                >
                  {schemaOptions.map((schema) => (
                    <MenuItem key={schema.value} value={schema.value}>
                      {schema.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={2} justifyContent="end">
                {" "}
                <button
                  style={{
                    border: "1px solid #339af0",
                    backgroundColor: "#d0ebff",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    width: "80%",
                    marginLeft: "3px",
                  }}
                >
                  +
                </button>
              </Grid>
            </Grid>
          </Box>
          {/* LINK BUTTON */}
          <span>
            <button
              style={{
                display: "inline-block",
                border: "none",
                background: "none",
                borderBottom: "2px solid #20c997",
                color: "#0ca678",
                paddingBottom: "5px",
              }}
            >
              + Add new schema
            </button>
          </span>
        </Stack>
      </Container>
      {/* FOOTER */}
      <Box
        sx={{
          padding: "16px 0px",
          backgroundColor: "#e9ecef",
          marginTop: "auto",
        }}
      >
        <Container>
          <Button
            variant="contained"
            color="success"
            size="small"
            sx={{ textTransform: "none", marginRight: "8px" }}
          >
            Save the segment
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{
              backgroundColor: "#fff",
              color: "#f03e3e",
              textTransform: "none",
            }}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Container>
      </Box>
    </Stack>
  );
}
