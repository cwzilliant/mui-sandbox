import { Button, Stack, Typography } from "@mui/material";
import {
  ZButton,
  ZButtonWithoutRest,
} from "@zilliant/ui-component-library-internal";

export const Buttons = () => {
  return (
    <>
      <Typography variant="h4" py={2}>
        Default Colors
      </Typography>
      <Stack width={200} gap={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Typography variant="h4" py={2}>
        Custom Colors
      </Typography>
      <Stack width={200} gap={2}>
        <Button variant="contained" color="anger">
          anger
        </Button>
        <Button variant="contained" color="sunshine">
          sunshine
        </Button>
        <Button variant="contained" color="steelBlue">
          steelBlue
        </Button>
        <Button variant="contained" color="violet">
          violet
        </Button>
      </Stack>

      <Typography variant="h4" py={2}>
        Shared Component Library Button
      </Typography>

      <Stack width={200} gap={2}>
        <ZButton
          onClick={() => {
            console.log("Click (ZButton)");
          }}
          // variant="outline"
          // disabled
        >
          ZButton
        </ZButton>

        <ZButtonWithoutRest
          onClick={() => {
            console.log("Click (ZButtonWithoutRest)");
          }}
          // variant="outline"
        >
          ZButtonWithoutRest
        </ZButtonWithoutRest>
      </Stack>
    </>
  );
};
