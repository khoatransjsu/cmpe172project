/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col, Button } from "reactstrap";
import image from "../images/cafe.jpg"
export default props => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
              If you're looking for a Hot Bowl of Pho
            <i className="fas fa-pizza-slice pizza-slice"></i>
          </p>
          <Button
            color="none"
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={image}
            alt="cafe"
            className="md-img"
          />
        </Col>
      </Row>
    </div>
  );
};
