import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const TermsOfService = () => {
  return (
    <>
      <Header />
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Terms of Service
        </Typography>

        <Typography variant="body1" paragraph>
          These terms and conditions outline the rules and regulations for the
          use of Syed Mahad Hussaini's website. By accessing or using this
          website, you agree to be bound by these terms and conditions in full.
          If you do not agree to these terms, please do not use the website.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing and using this website, you accept and agree to comply
          with all terms, conditions, and policies outlined in this document. If
          you do not agree to these terms, please refrain from using the
          website.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. License to Use the Website
        </Typography>
        <Typography variant="body1" paragraph>
          We grant you a limited, non-exclusive, non-transferable license to use
          the website for personal and non-commercial purposes, subject to the
          terms and conditions set forth in this agreement.
        </Typography>
        <Typography variant="body1" paragraph>
          You may not:
          <ul>
            <li>
              Modify, copy, distribute, or create derivative works based on the
              content of the website without explicit permission.
            </li>
            <li>
              Engage in unauthorized access or tampering with any part of the
              website.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          As a user, you agree to:
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>
              Provide accurate and truthful information when required (e.g.,
              during account creation or contact forms).
            </li>
            <li>
              Comply with all applicable laws and regulations when using the
              website.
            </li>
            <li>
              Maintain the confidentiality of your account and login details, if
              applicable.
            </li>
            <li>
              Notify us immediately if you suspect any unauthorized access to
              your account or any security breach.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Prohibited Activities
        </Typography>
        <Typography variant="body1" paragraph>
          You are prohibited from using the website for the following
          activities:
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>
              Engaging in illegal activities or promoting illegal content.
            </li>
            <li>
              Posting or transmitting harmful, defamatory, obscene, or offensive
              content.
            </li>
            <li>
              Attempting to interfere with the website's functionality or
              security.
            </li>
            <li>Distributing malware, viruses, or other malicious software.</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          To the fullest extent permitted by law, Syed Mahad Hussaini and its
          affiliates shall not be liable for any direct, indirect, incidental,
          special, or consequential damages arising from or related to your use
          of the website.
        </Typography>
        <Typography variant="body1" paragraph>
          We do not guarantee the accuracy, reliability, or completeness of any
          information or content available on the website, and we disclaim any
          responsibility for any errors or omissions.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Modifications to the Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify, update, or change these terms at any
          time. Any changes will be reflected on this page with an updated date.
          We encourage you to review this page periodically for any updates.
        </Typography>
        <Typography variant="body1" paragraph>
          By continuing to use the website after changes are made to the terms,
          you acknowledge and agree to the updated terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of Karachi, Pakistan, without regard to its
          conflict of law principles. Any disputes arising out of or in
          connection with these terms shall be subject to the exclusive
          jurisdiction of the courts located in Karachi, Pakistan.
        </Typography>

        <Typography variant="h6" gutterBottom>
          8. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or concerns about these terms, please
          contact us at{" "}
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

export default TermsOfService;
