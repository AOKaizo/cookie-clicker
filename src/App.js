import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Divider,
  Icon,
  Link,
  Paper,
  SvgIcon,
  Typography,
} from "@mui/material";
import happyCookie from "./Resources/happyCookie.svg";
import biteCookie from "./Resources/biteCookie.svg";
import eatenCookie from "./Resources/eatenCookie.svg";
import shockedCookie from "./Resources/shockedCookie.svg";
import { Container } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

function App() {
  const [cookieClicks, setCookieClicks] = useState(0);

  return (
    <Box height={"100vh"} sx={{ display: "flex", backgroundColor: "cornsilk" }}>
      <Grid2 container>
        <Grid2 xs={7}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
            }}
          >
            <Typography variant="h1">Cookie Clicker</Typography>
            <Container>
              <Typography variant="body1">
                One of the core lessons we learned that will never be forgotten
                is the process of making a cookie clicker. All hail the cookies!
              </Typography>
              <Divider sx={{ margin: 1 }} />
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                padding: 5,
              }}
            >
              <Paper>
                <Container sx={{ display: "flex" }}>
                  <Typography variant="h2">Cookie Status:</Typography>
                  <Container>
                    {cookieClicks >= 30 ? (
                      <img
                        alt="Shocked Cartoon Cookie"
                        src={shockedCookie}
                      ></img>
                    ) : (
                      <img alt="Happy Cartoon Cookie" src={happyCookie}></img>
                    )}
                  </Container>
                </Container>
              </Paper>
              <Paper>
                <Container sx={{ display: "flex" }}>
                  <Typography variant="h2">
                    Cookie Clicks: {cookieClicks}
                  </Typography>
                  {/*                   
                    {cookieClicks
                      ? Array(cookieClicks).fill(
                            <Icon fontSize="1">
                              <img
                                fullWidth
                                alt="Happy Cartoon Cookie"
                                src={happyCookie}
                              />
                            </Icon>
                        )
                      : null} */}
                </Container>
              </Paper>
            </Container>
          </Container>
        </Grid2>
        <Grid2 container xs={5} sx={{ placeContent: "center" }}>
          <Box>
            <Container>
              {cookieClicks < 30 ? (
                <Typography variant="h2">Click Me!</Typography>
              ) : null}

              {cookieClicks < 30 ? (
                <Button
                  onClick={() => setCookieClicks(cookieClicks + 1)}
                  fullWidth
                  disableRipple
                >
                  {cookieClicks <= 10 ? (
                    <img alt="Happy Cartoon Cookie" src={happyCookie}></img>
                  ) : cookieClicks <= 20 ? (
                    <img
                      alt="Bite Out of Cartoon Cookie"
                      src={biteCookie}
                    ></img>
                  ) : (
                    <img
                      alt="Partially Eaten Cartoon Cookie"
                      src={eatenCookie}
                    ></img>
                  )}
                </Button>
              ) : null}
              {cookieClicks >= 30 ? <Typography variant="h2">All Gone!</Typography>: null}
            </Container>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default App;
