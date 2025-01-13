import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="body1" paragraph>
          This Privacy Policy explains how we collect, use, and protect your
          information when you use Syed Mahad Hussaini's website. By using this
          website, you agree to the terms of this privacy policy. If you do not
          agree with these terms, please do not use this website.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Information Collection
        </Typography>
        <Typography variant="body1" paragraph>
          We collect various types of information to provide and improve our
          services, including:
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>
              <strong>Personal Information:</strong> Information that can be
              used to identify you, such as your name, email address, and phone
              number when you contact us or sign up for updates.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with the website, such as your IP address, browser type, and the
              pages you visit.
            </li>
            <li>
              <strong>Cookies:</strong> We may use cookies and similar tracking
              technologies to track activity on the website and enhance your
              user experience.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. How Information is Used
        </Typography>
        <Typography variant="body1" paragraph>
          The information we collect is used in the following ways:
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>
              To provide, operate, and maintain the website and its features.
            </li>
            <li>
              To improve, personalize, and expand our website and services based
              on user feedback and usage data.
            </li>
            <li>
              To communicate with you, including responding to your inquiries
              and sending periodic updates or newsletters (if you subscribe).
            </li>
            <li>
              To monitor usage and troubleshoot any technical issues with the
              website.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          Our website uses cookies to enhance your browsing experience. Cookies
          are small files stored on your device that allow us to remember your
          preferences and track your interactions with the website. You can
          adjust your browser settings to refuse cookies, but doing so may
          affect your ability to use certain features of the website.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Data Protection
        </Typography>
        <Typography variant="body1" paragraph>
          We take your privacy seriously and use a variety of security measures
          to protect your personal data from unauthorized access, alteration, or
          destruction. However, please note that no method of transmission over
          the internet or electronic storage is 100% secure. While we strive to
          protect your personal data, we cannot guarantee its absolute security.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          Depending on your location and applicable laws, you may have the
          following rights regarding your personal information:
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>
              <strong>Access:</strong> You have the right to request access to
              the personal information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You can request corrections to any
              inaccurate or incomplete personal data we hold about you.
            </li>
            <li>
              <strong>Deletion:</strong> You may request the deletion of your
              personal information, subject to certain legal obligations.
            </li>
            <li>
              <strong>Opt-out:</strong> You may opt-out of receiving marketing
              communications from us by following the unsubscribe instructions
              in the email or by contacting us directly.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Changes to the Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to update or change this Privacy Policy at any
          time. Any changes will be posted on this page, and the updated date
          will be indicated at the top of the policy. Please review this Privacy
          Policy periodically to stay informed of how we are protecting your
          information.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or concerns about this Privacy Policy,
          please feel free to contact us at{" "}
          <a
            href="mailto:mahadarshad214@gmail.com"
            style={{ color: "#f1c40f" }}
          >
            mahadarshad214@gmail.com
          </a>
          .
        </Typography>
      </Box>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
