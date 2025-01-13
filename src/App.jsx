import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
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
          <Routes>
            <Route
              path="/"
              element={
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Header />
                  </Grid>
                  <Grid item xs={12}>
                    <Skills />
                  </Grid>
                  <Grid item xs={12}>
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
              }
            />

            <Route path="/terms-of-service" element={<TermsOfService />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
