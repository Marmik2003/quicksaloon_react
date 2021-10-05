import { Icon } from "@iconify/react";
import { useState } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
// material
import { Stack, Button, Container, Typography } from "@mui/material";

import faker from "faker";
import { sample } from "lodash";

// components
import Page from "../../components/Page";
import ServiceForm from "./components/ServiceForm";
import ServiceTable from "./components/ServiceTable";
//
const ServiceLIST = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: sample([
    "Hair Cutting",
    "Shaving",
    "massages",
    "tanning",
    "facial",
    "waxing",
    "colouring",
    "nail treatments",
  ]),
  status: sample(["active", "inactive"]),
}));

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

const newServiceState = {
  id: null,
  name: "",
  is_active: false,
};

export default function Service() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [serviceState, setServiceState] = useState(newServiceState);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setServiceState(newServiceState);
  };

  return (
    <Page title="Service | Quicksaloon">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Services
          </Typography>
          <Button
            variant="contained"
            onClick={handleDialogOpen}
            startIcon={<Icon icon={plusFill} />}
          >
            New Service
          </Button>
        </Stack>
        <ServiceTable
          tableHead={TABLE_HEAD}
          serviceList={ServiceLIST}
          setServiceState={setServiceState}
          setDialogOpen={setDialogOpen}
        />
      </Container>
      <ServiceForm
        open={dialogOpen}
        handleClose={handleDialogClose}
        serviceState={serviceState}
      />
    </Page>
  );
}
