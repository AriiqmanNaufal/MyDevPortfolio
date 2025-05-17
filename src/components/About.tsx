import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const About: React.FC = () => {
  return (
    <section className="about">
      <Box id="about">
        <Container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* Frosted-glass background Box centered */}
          <Box
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)", // dark translucent background
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
              maxWidth: "600px",
              width: "100%",
              textAlign: "justify",
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontFamily: "'ADLaM Display', cursive",
                color: "white",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              About Me
            </Typography>
            <Divider sx={{ mb: 4, borderColor: "#ccc" }} />

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "'ADLaM Display', cursive",
                fontSize: "1.1rem",
                color: "white",
              }}
            >
              I’m an IT student who’s probably writing code while you’re reading
              this. Over the past few years, I’ve been mixing creativity with
              logic to build software and design user interfaces that actually
              make sense. I love problem-solving, but I’d rather debug code than
              debug my own life.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "'ADLaM Display', cursive",
                fontSize: "1.1rem",
                color: "white",
              }}
            >
              Along the way, I’ve dabbled in freelancing while working on my
              final year project, the <strong>Qis Andam Bridal System</strong> —
              a wedding planning system that helps couples organize their big
              day without the stress. I’ve also worked on numerous other
              projects, gaining hands-on experience in UI/UX design,
              development, and much more.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "'ADLaM Display', cursive",
                fontSize: "1.1rem",
                color: "white",
              }}
            >
              When I’m not glued to my screen, you’ll find me on the rugby
              field, kicking a football, or hustling at snooker and 8-ball pool
              (I swear I’m just one shot away from greatness). Sports keep me on
              my toes and teach me all sorts of life lessons, like teamwork,
              strategy, and how to laugh at myself after missing that easy shot.
            </Typography>

            <Typography
              variant="h6"
              align="center"
              sx={{
                mt: 4,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Let’s connect and create something amazing together. <br />
              Reach out if you’re looking for a passionate problem-solver with a
              bit of a competitive streak!
            </Typography>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default About;
