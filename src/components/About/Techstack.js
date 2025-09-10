import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import { 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn, 
  SiPytorch, 
  SiTensorflow, 
  SiKeras, 
  SiJupyter, 
  SiPostgresql, 
  SiTableau, 
  SiPowerbi, 
  SiPlotly, 
  SiDash 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core ML & Data Science */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /> {/* NumPy */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas /> {/* Pandas */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn /> {/* Scikit-learn */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch /> {/* PyTorch */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /> {/* TensorFlow */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras /> {/* Keras */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /> {/* Jupyter Notebooks */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* SQL / Databases */}
      </Col>

      {/* Visualization & Analytics */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly /> {/* Plotly */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDash /> {/* Dash */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau /> {/* Tableau */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi /> {/* Power BI */}
      </Col>

      {/* Collaboration & Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
    </Row>
  );
}

export default Techstack;

