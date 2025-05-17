import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import fypImg from "../assets/fyp.png";
import weatherImg from "../assets/weather.png";
import purposeImg from "../assets/purpose.png";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      style={{
        height: "31rem",
        boxShadow: "inset 0 50px 50px -50px rgba(0, 0, 0, 1)",
      }}
    >
      <h2
        style={{
          fontFamily: "'ADLaM Display', cursive",
          color: "#fef3c7",
          fontSize: "45px",
          textAlign: "center",
        }}
      >
        Projects
      </h2>
      <div
        className="project-list"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* Project 1 */}

        <Card
          className="card"
          sx={{
            width: 450,
            height: 340,
            borderRadius: "30px",
            background: "white",
            marginLeft: "2rem",
          }}
        >
          <a
            href="https://github.com/AriiqmanNaufal/EatsMore-Online-Food-Ordering-System"
            style={{ textDecoration: "none", color: "black" }}
            target="blank_"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={fypImg}
                alt="Project 1"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "ADLaM Display" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Wedding Planning System
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  A web-based wedding planning system built with PHP, CSS, and
                  MySQL to help users manage guest lists, budgets, vendors, and
                  schedules—all in one place.
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>

        {/* Project 2 */}
        <Card
          sx={{
            width: 450,
            height: 340,
            borderRadius: "30px",
            background: "white",
          }}
        >
          <a
            href="https://github.com/AriiqmanNaufal/WeatherForecast"
            style={{ textDecoration: "none", color: "black" }}
            target="blank_"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={weatherImg}
                alt="Project 2"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "ADLaM Display" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Weather Forecast App
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textAlign: "justify" }}
                >
                  A simple Spring Boot weather forecast web application that
                  allows users to check current weather conditions for any city
                  using the OpenWeatherMap API.
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>

        {/* Project 3 */}
        <Card
          sx={{
            width: 450,
            height: 340,
            borderRadius: "30px",
            background: "white",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/AriiqmanNaufal/Daily-Planner-Apps"
            style={{ textDecoration: "none", color: "black" }}
            target="blank_"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={purposeImg}
                alt="Project 3"
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "ADLaM Display" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Daily Planner Apps
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  A simple and user-friendly mobile application developed in
                  Kotlin with XML layout design. All data is securely stored and
                  managed using Firebase Realtime Database or Firebase
                  Firestore.
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>

        <a
          href="https://github.com/AriiqmanNaufal"
          target="blank_"
          style={{ marginLeft: "630px", color: "white", paddingTop: "20px" }}
        >
          More projects on my Github
        </a>
      </div>
      <div style={{ overflow: "hidden", lineHeight: 0 }}></div>
    </section>
  );
};

export default Projects;
