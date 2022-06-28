import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
const theme = createTheme();
const movieData = [
  {
    id: 1,
    name: "kgf2",
    category: "movie",
    language: "kannada",
    genre: "action",
    vote: 0,
  },
];

function Home() {
  const [showdata, setShowdata] = useState(false);

  useEffect(() => {
    const url =
      "https://hoblist.com/api/movieList?category=movies&language=kannada&genre=all&sort=voting";
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movieData),
        });
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Button onClick={() => setShowdata(!showdata)}>Menu</Button>
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "max-content",
            p: 2,
            border: "1px dashed grey",
            // backgroundColor: "primary.dark",
            // "&:hover": {
            //   backgroundColor: "primary.main",
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          {" "}
          <Grid container spacing={2}>
            {showdata && (
              <Grid item>
                <Typography component="p" variant="" align="center">
                  Company: Geeksynergy Technologies Pvt Ltd Address:
                  Sanjayanagar, Bengaluru-56 Phone: XXXXXXXXX09 Email:
                  XXXXXX@gmail.com
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography component="h1" variant="h5" align="center">
                Movie Reviews
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12} sm={6}>
                {movieData.map((item) => {
                  return (
                    <Typography key={item.id} component="h1" variant="h6">
                      {` ${item.id}.` +
                        `Name: ${item.name}` +
                        ` Category: ${item.category}` +
                        ` Genre: ${item.genre}` +
                        ` Vote: ${item.vote}`}
                    </Typography>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
