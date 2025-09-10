import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Medical appointment analysis.png";
import emotion from "../../Assets/Projects/United states sales analysis.png";
import editor from "../../Assets/Projects/qa.png";
import chatify from "../../Assets/Projects/text summerization.png";
import suicide from "../../Assets/Projects/sentiment analysis.png";
import bitsOfCode from "../../Assets/Projects/Topic modeling.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Medical Appointment Analysis Dashboard"
              description="Preprocessed and visualized medical appointment data, then built an interactive dashboard using Dash and Plotly to highlight key analytical insights and trends."
              ghLink="https://github.com/AbdallahSabry7/Medical-Appointments-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="United States Sales Analysis Dashboard"
              description="Processed and visualized sales data, then developed an interactive Dash and Plotly dashboard to uncover key sales patterns, performance trends, and business insights."
              ghLink="https://github.com/AbdallahSabry7/United-States-sales-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="QA using transformer"
              description="Built and fine-tuned transformer-based models to develop a question-answering system, enabling accurate retrieval of answers from text data."
              ghLink="https://github.com/AbdallahSabry7/Elevvo-Pathways-Tasks/tree/main/QA%20using%20transformer"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Text Summarization using T5-base"
              description="Implemented and fine-tuned a T5-base model to generate concise and coherent summaries, transforming long-form text into digestible insights."
              ghLink="https://github.com/AbdallahSabry7/Elevvo-Pathways-Tasks/tree/main/Text%20Summarization%20using%20T5-base"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sentiment Analysis on Product Reviews"
              description="Applied Naive Bayes and Logistic Regression models to classify customer reviews by sentiment, uncovering valuable insights into consumer opinions and product perception."
              ghLink="https://github.com/AbdallahSabry7/Elevvo-Pathways-Tasks/tree/main/Sentiment%20Analysis%20on%20Product%20Reviews"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Topic Modeling on News Articles"
              description="Employed LDA and NMF techniques to uncover latent topics in a collection of news articles, facilitating a deeper understanding of prevalent themes and trends."
              ghLink="https://github.com/AbdallahSabry7/Elevvo-Pathways-Tasks/tree/main/Topic%20Modeling%20on%20News%20Articles"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
