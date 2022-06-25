import { Container, Row, Col } from "react-bootstrap";
import "../styles/ChecklistPage.scss";

const ChecklistPage = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="checklistHeader">
              <h1 className="titleChecklist">Checklist - Divisie 3</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="legChecklist">Jeugd E</p>
          </Col>
          <Col>
            <p className="legChecklist2">Junior D</p>
          </Col>
          <Col>
            <p className="legChecklist3">Senior C</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChecklistPage;
