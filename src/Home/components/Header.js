import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import {Link} from 'react-router-dom'
import logo from "../../assets/FullLogo.png";
import Connect from "./Connect";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="" width={"100%"} style={{ marginTop: -48 }} />
      <Connect responsive={false} />
      <Typography variant="h6" marginTop={3}>
        Lucky Cat, the highest stablecoin rewards in all of DeFi.
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://luckycat.money/Lucky_Cat_BUSD_Litepaper_202222.pdf';
              }}
              >
                  Litepaper
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://pancakeswap.finance/swap?outputCurrency=0x6A253216Ee3D9c4B9e6Cbb68889A96b5F6433e05';
              }}
              >
                  Buy on Pancakeswap
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://poocoin.app/tokens/0x6A253216Ee3D9c4B9e6Cbb68889A96b5F6433e05';
              }}
              >
                  Chart
            </Button>
        </Grid>
      </ButtonContainer>
    </Wrapper>
  );
}
