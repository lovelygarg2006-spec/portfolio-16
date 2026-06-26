import React from "react";

const Portfolio = () => {
  return (
    <div
      style={{
        backgroundColor: "#372742",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 120px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "60px",
              color: "#bbd4e1",
            }}
          >
            Lovely Gupta
          </h1>

          <h2
            style={{
              color: "#ffd369",
            }}
          >
            Web Developer | Student
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "35px",
              color: "#d8d8d8",
            }}
          >
            I specialize in creating digital experiences that
            <br />
            bridge the gap between design and technology.
            <br />
            Currently pursuing BCA and exploring
            <br />
            the future of web development.
          </p>

          <button
            style={{
              padding: "15px 35px",
              backgroundColor: "#ff914d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
           <a href="https://drive.google.com/file/d/1KR9-V-KCdV_KZbicZqtnWbdpdd_MyybF/view?usp=sharing">Download Resume</a> 
          </button>
        </div>

        <div>
          <img
            src="gupta.jpeg"
            alt="Lovely"
            style={{
              height: "350px",
              width: "350px",
              borderRadius: "50%",
              border: "6px solid #ff914d",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div
        style={{
          padding: "60px 120px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#ff914d" }}>About Me</h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
          }}
        >
          Hello! I'm Lovely Gupta, a passionate web developer and BCA student.
          I enjoy creating responsive websites using HTML, CSS, JavaScript and
          React. My goal is to become a Full Stack Developer.
        </p>
      </div>

      <div
        style={{
          padding: "60px 120px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#ff914d",
          }}
        >
          My Skills
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Bootstrap",
            "Git",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                backgroundColor: "#4c3b57",
                padding: "20px",
                width: "180px",
                textAlign: "center",
                borderRadius: "10px",
                margin: "15px",
                fontSize: "22px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "60px 120px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#ff914d",
          }}
        >
          My Projects
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {[
            "Student Registration Form",
            "Weather App",
            "Portfolio Website",
          ].map((project) => (
            <div
              key={project}
              style={{
                width: "300px",
                backgroundColor: "#4c3b57",
                padding: "25px",
                borderRadius: "15px",
                margin: "20px",
              }}
            >
              <h2>{project}</h2>

              <p>
                A responsive React project with modern UI and clean design.
              </p>

              <button
                style={{
                  backgroundColor: "#ff914d",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "60px 120px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#ff914d" }}>Contact Me</h1>

        <p>Email : lovely@gmail.com</p>

        <p>Phone : +91 9306810726</p>

        <p>Location : Haryana, India</p>

        <button
          style={{
            backgroundColor: "#ff914d",
            color: "white",
            padding: "15px 35px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Hire Me
        </button>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#2b1c33",
          marginTop: "50px",
        }}
      >
        © 2026 Lovely Gupta | All Rights Reserved
      </div>
    </div>
  );
};

export default Portfolio;