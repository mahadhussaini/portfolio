import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Education = () => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "15px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        color: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Education
        </Typography>
        <Typography variant="h6" sx={{ color: "#f1c40f" }}>
          Bachelor in Computer Science
        </Typography>
        <Typography color="textSecondary">
          Iqra University, Karachi, Pakistan
        </Typography>
        <Typography variant="body1">2020 - 2023</Typography>
      </CardContent>
    </Card>
  );
};

export default Education;
