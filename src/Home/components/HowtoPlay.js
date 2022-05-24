import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "#241F31",
  marginBottom: 24,
});

const nutritionFacts = [
  {
    label: "1) Purchase trading bots.",
    
  },
  {
    label: "2) Compound or withdraw profits daily. ",
    
  },
];

export default function HowtoPlay() {
  return (
    <CardWrapper>
      <CardContent>
        <Typography variant="h5" borderBottom="6px solid" borderColor="#2c2c34" textAlign="center" paddingBottom={1}>
          How to Earn
        </Typography>
        <Box paddingTop={2}>
          {nutritionFacts.map((f) => (
            <Grid container key={f.label} justifyContent="space-between">
              <Typography variant="body1" gutterBottom>
                 {f.label}
            </Typography>
            </Grid>
          ))}

        </Box>
      </CardContent>
    </CardWrapper>
    
  );
}
