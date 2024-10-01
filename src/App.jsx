import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skills />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Projects />
          </Grid>
          <Grid item xs={12}>
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <Education />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
