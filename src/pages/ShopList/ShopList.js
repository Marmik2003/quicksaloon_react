import { useState } from "react";
// material
import { Stack, Container, Typography } from "@mui/material";

import faker from "faker";
import { sample } from "lodash";

// components
import Page from "../../components/Page";
import ShopTable from "./components/ShopTable";
import ShopForm from "./components/ShopForm";
//
const ShopLIST = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: sample([
    "Lorem Ipsum",
    "VKumar",
    "MS saloon"
  ]),
  subscription: sample(['Free', 'Basic', 'Gold', 'Platinum', 'Diamond', 'Full Access']),
  shopNumber: faker.random.number({ min: 1, max: 9 }),
  status: sample(["active", "inactive"]),
}));

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "subscription", label: "Subscription", alignRight: false },
  { id: "shopNumber", label: "Number of Branches", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

const newShopState = {
  id: null,
  name: "",
  status: false,
};

export default function Shop() {
  console.log(ShopLIST);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [ShopState, setShopState] = useState(newShopState);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setShopState(newShopState);
  };

  return (
    <Page title="Shop | Quicksaloon">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Shops
          </Typography>
        </Stack>
        <ShopTable
          tableHead={TABLE_HEAD}
          ShopList={ShopLIST}
          setShopState={setShopState}
          setDialogOpen={handleDialogOpen}
        />
      </Container>
      <ShopForm
        shopState={ShopState}
        open={dialogOpen}
        handleClose={handleDialogClose}
      />
    </Page>
  );
}
