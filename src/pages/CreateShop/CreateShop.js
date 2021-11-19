import React from 'react'

// material
import { Stack, Button, Container, Typography, Card } from "@mui/material";

// Components
import Page from "../../components/Page";
import ShopForm from './components/ShopForm';

// initial form values
import formInitialValues from './components/FormModel/formInitialValues'

import { useParams } from 'react-router-dom';

const CreateShop = ({defaultValues=formInitialValues}) => {
  const { id } = useParams();
  console.log('CreateShop.js: id=', id)
  return (
    <Page title="Create Shop | Quicksaloon">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Create Shop
          </Typography>
        </Stack>
        <Card>
          <ShopForm formValues={defaultValues} />
        </Card>
      </Container>
    </Page>
  )
}

export default CreateShop
