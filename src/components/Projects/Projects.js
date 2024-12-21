import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inshort from "../../assests/inshort.png";
import Github from "../../assests/githubuserDetector.png";
import SHopingCard from "../../assests/shoping-card.png";
import blog from "../../assests/blog.png";
import auth from "../../assests/authentication.png";
import typing from "../../assests/typing.png";
import video from "../../assests/video.png";
import gym from "../../assests/gym.png";
import weather from "../../assests/weather.png";
import todo from "../../assests/todo.png";
function Projects() {
  const projectArray = [
    {
      image: auth,
      isBlog: false,
      title: "Comprehensive Authentication System",
      description:
        "Developed a full-featured authentication system using the MERN stack. The application supports secure user login and logout, email verification via OTP, password reset, and forgot password functionality. It employs robust backend APIs for seamless integration with the frontend, ensuring a secure and user-friendly experience. The project showcases advanced authentication practices and is designed as a portfolio highlight.",

      ghlink: "https://github.com/Nitesh4256/authentication",
      demoLink: "https://authentication-frontend-i3lf.onrender.com/",
    },
    {
      image: inshort,
      isBlog: false,
      title: "News Web App",
      description:
        "Created a dynamic news web application using HTML, CSS, and JavaScript. It fetches and displays news articles from an API with category-based filtering for a better user experience.",
      ghlink: "https://github.com/Nitesh4256/inshorts-clone",
      demoLink: "https://nitesh-inshort-clone.netlify.app/",
    },
    {
      image: typing,
      isBlog: false,
      title: "Typing Practice Website",
      description:
        "Developed a typing practice website using HTML, CSS, and JavaScript. The application evaluates typing speed, accuracy, and completion time, providing users with a comprehensive typing performance analysis.",

      ghlink: "https://github.com/Nitesh4256/Typing-website",
      demoLink: "https://typing-monkey-nitesh.netlify.app/",
    },
    {
      image: Github,
      isBlog: false,
      title: "GitHub User Finder",
      description:
        "Developed a GitHub user search application using HTML, CSS, and JavaScript. Users can search for GitHub profiles by username, view profile details, and toggle between light and night modes for an enhanced user experience.",
      ghlink: "https://github.com/Nitesh4256/github-detecter",
      demoLink: "https://github-user-detecter.netlify.app/",
    },
    {
      image: SHopingCard,
      isBlog: false,
      title: "Shopping Cart Application",
      description:
        "Built a shopping cart application using React.js. Users can add items to the cart, view their selections, and remove items dynamically, providing a seamless shopping experience.",

      ghlink: "https://github.com/Nitesh4256/shoping-cart",
      demoLink: "https://shopingcartclone.netlify.app/",
    },
    {
      image: video,
      isBlog: false,
      title: "Video Streaming Platform",
      description:
        "Developed a YouTube-like video-watching platform using React.js. The application enables users to search for videos and explore content categorized by type, delivering a smooth and intuitive video streaming experience.",
      ghlink: "https://github.com/Nitesh4256/Youtube-Clone",
      demoLink: "https://youtubevideoclone.netlify.app/",
    },
    {
      image: gym,
      isBlog: false,
      title: "Gym Exercise Finder",
      description:
        "Created a gym website using React.js that lets users search for exercises and explore them by category. Each exercise has a dedicated description page, offering detailed information to support fitness goals.",
      ghlink: "https://github.com/Nitesh4256/gymWebsiteClone",
      demoLink: "https://gym-website-nitesh-shivhare.netlify.app/",
    },
    {
      image: weather,
      isBlog: false,
      title: "Weather App ",
      description:
        "Developed a weather application using HTML, CSS, and JavaScript. The app fetches weather data based on the user's location or allows users to search for the weather in any city, providing real-time forecasts and conditions.",

      ghlink: "https://github.com/Nitesh4256/wheaterapp",
      demoLink: "https://nitesh-weather-app-project.netlify.app/",
    },

    {
      image: blog,
      isBlog: false,
      title: "Mern Blog App",
      description:
        "Built a blog application using the MERN stack where users can sign up, log in, and view all available blogs. Admins have the ability to create, delete, and update blogs, providing full control over the content management system.",

      ghlink: "https://github.com/Nitesh4256/Blog-app",
      demoLink: "https://blog-app-frontend-71jh.onrender.com/",
    },
    {
      image: todo,
      isBlog: false,
      title: "To do List",
      description:
        "Created a simple to-do list application using HTML, CSS, and JavaScript. Users can add, edit, and remove tasks, helping them manage their daily activities efficiently. The app provides an intuitive interface for task management.",
      ghlink: "https://github.com/Nitesh4256/todoapp",
      demoLink: "https://todolist-nitesh.netlify.app/",
    },
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectArray.map((object) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={`${object.image}`}
                isBlog={false}
                title={object.title}
                description={object.description}
                ghLink={object.ghlink}
                demoLink={object.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
