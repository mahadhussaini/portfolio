import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

const Experience = () => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "15px",
        color: "#fff",
        padding: "20px",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#fff", marginBottom: "30px" }}
        >
          💼 Experience
        </Typography>

        {/* Arc Inventador Experience */}
        <Box mb={4}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Arc Inventador - Full Stack Developer
          </Typography>
          <Typography color="textprimary">
            02/2025 - Present | Karachi, Pakistan
          </Typography>

          <Typography variant="body1" sx={{ marginTop: 2 }}>
            As a Full Stack Developer at Arc Inventador, I collaborate with
            cross-functional teams to design and implement enterprise-level web
            applications. My responsibilities include end-to-end development,
            system architecture design, and maintaining coding best practices.
          </Typography>

          <ul style={{ marginTop: 10, paddingLeft: 20 }}>
            <li>
              <strong>Led the development</strong> of a multi-tenant SaaS
              platform, enhancing scalability and performance.
            </li>
            <li>
              <strong>Automated deployment pipelines</strong> using Jenkins and
              GitHub Actions, reducing deployment time by 40%.
            </li>
            <li>
              <strong>Integrated GraphQL APIs</strong> with complex data
              querying capabilities, improving data fetching efficiency.
            </li>
            <li>
              <strong>Implemented microservices architecture</strong> using
              Docker and Kubernetes for modular and maintainable codebases.
            </li>
            <li>
              <strong>Enhanced frontend performance</strong> by optimizing
              React components and applying server-side rendering with Next.js.
            </li>
          </ul>

          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <strong>Technologies Used:</strong> React.js, Node.js, Express,
            MongoDB, Kubernetes, Docker, GraphQL, TypeScript, AWS.
          </Typography>
        </Box>

        <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

        {/* Freelancer.com Experience */}
        <Box mb={4}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Freelancer.com - Full Stack Developer
          </Typography>
          <Typography color="textprimary">
            03/2024 - 02/2025 | Remote
          </Typography>

          <Typography variant="body1" sx={{ marginTop: 2 }}>
            As a Full Stack Developer on Freelancer, I delivered custom
            solutions to clients across various industries, focusing on building
            dynamic and high-performance applications.
          </Typography>

          <ul style={{ marginTop: 10, paddingLeft: 20 }}>
            <li>
              <strong>Designed and developed</strong> full-stack applications
              using the MERN stack, ensuring robust performance and security.
            </li>
            <li>
              <strong>Implemented RESTful and GraphQL APIs</strong>, enabling
              seamless integration with third-party services.
            </li>
            <li>
              <strong>Utilized AWS, Docker, and CI/CD pipelines</strong> to
              ensure smooth deployment and scalability.
            </li>
            <li>
              <strong>Collaborated with UI/UX designers</strong> to create
              responsive and visually appealing user interfaces.
            </li>
            <li>
              <strong>Managed databases</strong> including MongoDB and MySQL,
              optimizing queries and enhancing data storage strategies.
            </li>
          </ul>

          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <strong>Technologies Used:</strong> React.js, Next.js, Node.js,
            Express, MongoDB, MySQL, Firebase, AWS, Docker, Redis.
          </Typography>

          <Divider sx={{ marginY: 2, backgroundColor: "#f1c40f" }} />

          {/* Key Projects */}
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Key Projects
          </Typography>

          {/* SoleMates E-commerce */}
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            <strong>SoleMates (E-commerce Platform)</strong> - Developed a
            comprehensive e-commerce platform with features such as product
            search, dynamic filters, secure payment integration, and order
            tracking.
          </Typography>
          <Typography variant="body2" color="textprimary">
            <em>Project Duration: January 2025 - May 2025</em>
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/solemates"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "none" }}
            >
              View SoleMates on GitHub
            </a>
          </Typography>

          <Divider sx={{ marginY: 2, backgroundColor: "#f1c40f" }} />

          {/* LearnHub (LMS) */}
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            <strong>LearnHub (LMS Platform)</strong> - Created a Learning
            Management System featuring real-time chat, video streaming,
            interactive quizzes, and analytics dashboards.
          </Typography>
          <Typography variant="body2" color="textprimary">
            <em>Project Duration: August 2024 - December 2024</em>
          </Typography>
          <Typography color="textSecondary">
            <a
              href="https://github.com/mahadhussaini/learnhub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1c40f", textDecoration: "none" }}
            >
              View LearnHub on GitHub
            </a>
          </Typography>
        </Box>

        <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

        {/* Paysys Labs Internship */}
        <Box mb={4}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Paysys Labs - Software Development Intern
          </Typography>
          <Typography color="textprimary">
            12/2023 - 02/2024 | Karachi, Pakistan
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Contributed to the <strong>Bureau of Emigration & Overseas Employment</strong> project by:
          </Typography>
          <ul style={{ marginTop: 10, paddingLeft: 20 }}>
            <li>Enhancing backend performance and optimizing API endpoints.</li>
            <li>
              Implementing data validation and security measures to safeguard
              user information.
            </li>
            <li>
              Assisting in code reviews and refining development workflows to
              improve efficiency.
            </li>
          </ul>
        </Box>

        <Divider sx={{ marginY: 3, backgroundColor: "#f1c40f" }} />

        {/* Volunteer Work */}
        <Box mb={4}>
          <Typography variant="h6" sx={{ color: "#f1c40f" }}>
            Volunteer - Tech for Good
          </Typography>
          <Typography color="textprimary">
            06/2023 - 09/2023 | Karachi, Pakistan
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Developed a responsive and accessible website for a non-profit
            organization, focusing on delivering tech education to underprivileged
            communities.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <strong>Key Contribution:</strong> Reduced website load time by 30%
            by implementing lazy loading and optimizing resources.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Experience;
