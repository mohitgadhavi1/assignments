import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import "./Home.css";

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

function Home(props) {
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
    <div className="movieComp">
      <div className="header">
        <Button onClick={() => setShowdata(!showdata)}>Menu</Button>
        <Button onClick={() => props.setLogin(false)}>Logout</Button>
      </div>

      {showdata && (
        <div className="companyInfo">
          <Typography component="p" variant="" align="left">
            Company: Geeksynergy Technologies Pvt Ltd
          </Typography>
          <Typography component="p" variant="" align="left">
            Address: Sanjayanagar,
          </Typography>
          <Typography component="p" variant="" align="left">
            Bengaluru-56 Phone: XXXXXXXXX09
          </Typography>
          <Typography component="p" variant="" align="left">
            Email: XXXXXX@gmail.com
          </Typography>
        </div>
      )}

      <Typography component="h1" variant="h5" align="center">
        Movie Reviews
      </Typography>
      <div className="fetchData">
        {movieData.map((item) => {
          return (
            <div key={item.id}>
              <Typography component="p" variant="" align="left">
                {" "}
                {item.id}. Name: {item.name}
              </Typography>
              <Typography component="p" variant="" align="left">
                {" "}
                Category: {item.category}{" "}
              </Typography>
              <Typography component="p" variant="" align="left">
                {" "}
                Genre: {item.genre}
              </Typography>
              <Typography component="p" variant="" align="left">
                {" "}
                Vote: {item.vote}{" "}
              </Typography>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
